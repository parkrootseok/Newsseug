import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addContents, fetchContents } from '../../data/info';
import ContentCard from '../ContentCard';
import { useState } from 'react';

export default function DemoQuery() {
  const queryClient = useQueryClient();
  /**
   * search => 여러가지로 달라질 수 있음
   */
  const [search, setSearch] = useState('');
  const [contentTitle, setTitle] = useState('');
  // IMP : 처음에 App.tsx에서 설정했던 QueryClient와 같은 것임
  // * => 이를 통해, query의 Validation을 할 수 있음
  /**
   * IMP : useQuery Hook : Main Hook to use React Query
   * * queryFn : QueryFunction() Arrow Function
   * * queryKey : Query에 대한 Identification을 위한 Key ( 캐싱 )
   * * useQuery Hook의 반환 값을 적절하게 원하는 것만 destructure을 통해 정할 수 있다.
   */
  const { data: contents, isLoading } = useQuery({
    /**
     * * React Query는 Caching을 이용한다.
     * * 캐싱된 정보를 새로 Fetch를 통해 가져오는 것 대신 Rendering 한다.
     */
    queryFn: () => fetchContents(search),
    /**
     * IMP : 어떤 Parameter의해서, Query의 유형이 달라지면 그에 맞게 queryKey를 정의해줘야 한다.
     * IMP : 이렇게 Option으로 정해주면 invalidate에서 별다른 Check를 안해도 된다.
     * ! search : 검색어가 변경될 때 마다, 새로운 Caching -> 새로운 Query로 간주되어서 새로 가져오게 함.
     */
    queryKey: ['contents', { search }],
    staleTime: Infinity, // Data를 stale을 하지 않도록 한다. 이 데이터는 무한히 신선한 상태로 유지됩니다. -> 항상 캐시데이터
    // cacheTime: 0 => 항상 캐싱된 데이터를 이용하지 않고 refetch를 유도하는 Property
    // refetchInterval, refetchonMount와 같이 여러 option Property가 존재한다.
  });

  const { mutateAsync: addContentsMutation } = useMutation({
    // 변형, 변화에 대한 Query
    /**
     * * React Query로 하여금, 새로운 Data를 Fetch를 하라는 Code가 없음.
     * IMP : addContentMutation의 성공 여부에 따라, 해야 하는 동작이 달라짐.
     * IMP : + 새로운 정보를 가져오는 Content Query를 Invalidate해야 한다. => 새로운 Data를 Refetch해야 한다.
     * IMP : Query를 invalidate한다는 것은 캐싱된 데이터를 더이상 유효하지 않다고 표시하고, 다음에 해당 데이터를 사용할 때,
     * IMP 최신으로 가져오라는 것을 의미함.
     */
    mutationFn: addContents,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contents'] });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <b>React Query Tutorial</b>
      <div>
        <input type='text' onChange={(e) => setTitle(e.target.value)} value={contentTitle} />
        <button
          onClick={async () => {
            try {
              await addContentsMutation({ contentTitle });
              setTitle('');
            } catch (e) {
              console.error(e);
            }
          }}>
          Add Content
        </button>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {contents?.map((content) => {
          return <ContentCard key={content._id} content={content} />;
        })}
      </div>
    </div>
  );
}
