import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import App from './App.tsx';
import './index.css';

/**
 * * Provider : works with the Redux Context API
 * * => Provider를 통해 하위 Component에서 store를 사용할 수 있도록 함.
 * * => Context를 통해 store를 Inject했음 => 하위 컴포넌트는 이 store에 Access할 수 있음
 */

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
