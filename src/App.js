import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {ThemeProvider} from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Home/>
    </div>
    </ThemeProvider>
  );
}

export default App;
