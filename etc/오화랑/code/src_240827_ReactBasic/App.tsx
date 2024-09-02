import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddContentForm from './components/AddContentForm';
import ContentList from './components/ContentList';
import ContentsSummary from './components/ContentsSummary';
import Demo from './components/UI/Demo';
import DemoQuery from './components/UI/DemoQuery';
import useContents from './hooks/useContent';
import { useState } from 'react';
function App() {
  /**
   * IMP : 다양한 Function을 더 깔끔하게 관리하는 방법은 존재하긴 함 => Custom Hook
   * IMP : showDemo를 render & reRender하는 과정에서, 어떻게 recreate Query를 하는 것인가?
   */
  const { contents, setContentMade, addContent, deleteContent, deleteMadeContent } = useContents();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const [showDemo, setShowDemo] = useState(true);
  /**
   * * Demo를 Render할 것인가 ? 어떻게 reMount를 처리해 내는가 ?
   * * Default한 상태에는, Query는 Cache하고 있어서 결과를 Toggle에 따라 Mount되면 캐싱된 데이터를 바로 가져온다.
   */

  return (
    <main className='py-10 h-screen space-y-5 overflow-y-auto'>
      <h1 className='font-bold text-3xl text-center'>MeshRoom</h1>
      <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6'>
        <AddContentForm onSubmit={addContent} />
        <ContentList
          contents={contents}
          onMadeChange={setContentMade}
          onDeleteClick={deleteContent}
        />
      </div>
      <ContentsSummary contents={contents} deleteAllMade={deleteMadeContent} />
      <QueryClientProvider client={queryClient}>
        <button onClick={() => setShowDemo(!showDemo)}>Toggle Demo</button>
        {showDemo && <DemoQuery />}
      </QueryClientProvider>
    </main>
  );
}

export default App;
