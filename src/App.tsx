import { DEFAULT_THEME } from '@theme/default';
import { GlobalStyle } from '@theme/global';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './routes';
import { CartProvider } from '@contexts/CartContext';

export const App = () => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
