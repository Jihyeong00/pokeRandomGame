import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
    refetchOnMount: false,
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App"></div>
        </QueryClientProvider>
    );
}

export default App;