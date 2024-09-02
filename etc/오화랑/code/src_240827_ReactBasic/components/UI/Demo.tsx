import { useEffect, useRef, useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface Post {
  id: number;
  title: string;
}

export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(0);

  // IMP : React에서 state로 관리하는 것과 Ref로 관리하는 것의 차이는 무엇인가?
  const abortControllerRef = useRef<AbortController | null>(null);

  /**
   * * Axios같은 것을 사용하면, 굳이 .json()같은 것을 하지 않아도 됨.
   * * 지금은 JS의 fetch를 통해서 response를 받아오고, .json()을 통해 사용할 수 있는 형태로 만들어 냄
   * IMP : 이를 통해 State로 관리할 수 있음.
   * IMP : 현재 posts의 Type은 'any'임. => Proper Type을 가지는 것이 중요함.
   */

  /**
   * * 지금은 Data를 Fetching 하는데, 어떤 Loading에 대한 설정을 하지 않았음.
   * * Blank 화면에서, 갑자기 Pop Up하는 느낌이 든다. => UX 입장에서 좋은 설계는 아님.
   * * Fetching 속도가 빠르다면, 상관 없지만 Fetching 속도가 느리면 아무 화면도 없이 기다려야 함.
   * ! Fail에 대한 Handling도 해야 한다. => 단순하게, log만 찍는 것이 아닌, User를 위한 Handling도!!
   */
  useEffect(() => {
    const fetchPosts = async () => {
      /**
       * * Null일 수 있기 때문에, Optional로 관리함
       * * 한번 이미 요청이 진행되어서, 더이상 Null이 아니고 AbortController() 객체가 있기 때문에 아래 response에서
       * * Signal을 받아내고, Abort를 진행할 수 있게 된다.
       * IMP : Signal은 1번에 1개만 받아낼 수 있기 때문에, 계속 AbortController()를 요청마다 만들어줘야 한다.
       * IMP : Abort를 하면, JS에서는 Error가 발생한다. => 현재 Code에서는 UI에서 Error를 명시해버릴 수도 있으니 고쳐줘야 한다. try ~ catch (error) Part
       */
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setLoading(true);
      try {
        // const response = await fetch(`${BASE_URL}/posts`);
        // IMP : Page를 dependency로 두고 있으며, 바뀔 때 마다 Request Fire
        const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        const posts = (await response.json()) as Post[];
        setPosts(posts);
      } catch (error) {
        // * Error Type은 unknown Type임
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            console.log('Abort Error');
            return;
          }
          setError(error);
        } else {
          setError(new Error('An unknown error occurred'));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  /**
   * * useEffetct(() => {}, []) : onMounted되었을 때, Only Once 동작
   * * 하지만, Pagination과 같이 여러번 동작하고 싶을 수 있음
   * IMP : 한 번에 모든 fetch를 보내는 것 보다는, Batch 단위로 fetch를 보낼 수 있음
   * ! 이렇게 Multiple REQ를 날리는 것이 효율적이지만, Bug가 많아질 수 있음.
   *
   */

  /**
   * if (loading) {
   *   return <div>Loading...</div>;
   * }
   */

  if (error) {
    return <div>Something went wrong! Please try again</div>;
  }

  return (
    <div>
      <h1 className='mb-4 text-2xl'> Fetching </h1>
      <button onClick={() => setPage(page + 1)}>Increase Page ({page})</button>
      {loading && <div>Loading...</div>}
      {!loading && (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
