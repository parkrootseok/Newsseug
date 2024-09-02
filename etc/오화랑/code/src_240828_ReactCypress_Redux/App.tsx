import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DemoQuery from './components/DemoQuery';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const [showDemo, setShowDemo] = useState(true);

  return (
    <main>
      <Counter />
      <QueryClientProvider client={queryClient}>
        <button onClick={() => setShowDemo(!showDemo)}>Toggle Demo</button>
        {showDemo && <DemoQuery />}
      </QueryClientProvider>
    </main>
  );
}

export default App;
