import './App.css'
import CovidTable from './components/CovidTable'
import Map from './components/Map.jsx'
import Legend from './components/Legend.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <h1>COVID-19 Dashboard</h1>
        <CovidTable />
        <Map />
        <Legend />
      </ThemeProvider>
    </>
  )
}

export default App
