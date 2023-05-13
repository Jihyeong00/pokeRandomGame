import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

const queryClient = new QueryClient({
  refetchOnMount: false,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
