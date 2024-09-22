import './App.css'
import AppProvider from './providers/app-provider';
import Router from './providers/router';
import routes from './routes';

function App() {
    return (
        <AppProvider>
            <Router routes={routes}/>
        </AppProvider>
    );
}
export default App
