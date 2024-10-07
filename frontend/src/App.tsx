import Router from 'Router';
import GlobalStyle from 'styles/global-styles';
import useAutoRefresh from './hooks/useAutoRefresh';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { RootState } from '@reduxjs/toolkit';
import { useTheme } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  useAutoRefresh();
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <meta name="theme-color" content={theme.bgColor} />
      </Helmet>
      <GlobalStyle />
      <Router />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
}

export default App;
