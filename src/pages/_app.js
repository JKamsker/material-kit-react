import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';
import '../components/dashboard/audio-dropzone.css';
import '../components/dashboard/audiobook.css';

import store from 'src/app/store';
import { Provider } from 'react-redux';

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>
            Material Kit Pro
          </title>
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
          />
        </Head>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            {getLayout(
              <Component {...pageProps} />)}

          </ThemeProvider>
        </LocalizationProvider>
      </CacheProvider>
    </Provider>
  );
};

export default App;
