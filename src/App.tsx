import { ResultadoContextProvider } from './contexts';
import Routes from './routes/Routes';



function App() {
  return (
    <ResultadoContextProvider>
        <Routes />
    </ResultadoContextProvider>
  );
}

export default App;
