import { DEFAULT_THEME } from '@theme/default';
import { GlobalStyle } from '@theme/global';
import { ThemeProvider } from 'styled-components';

export const App = () => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <h1>Coffee Deliver</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
