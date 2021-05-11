import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Home from './components/Home';
import {ThemeProvider} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';


function App() {
  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  });

  // we change the palette type of the theme in state
  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);
  return (
    <ThemeProvider theme={muiTheme}>
    <div className="App">
      <Home onToggleDark = {toggleDarkTheme}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
