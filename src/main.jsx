import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './routes';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { standardTheme } from './styles/themes/standard.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
