import './App.css'
import CovidTable from './components/CovidTable'
import Map from './components/Map.jsx'
import HorizontalBarChart from './components/HorizontalBarChart.jsx';
import PieChartComponent from './components/PieChartComponent.jsx';
import LineChart from './components/LineChart.jsx';
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
        {/* <HorizontalBarChart /> */}
        <PieChartComponent />
        <LineChart />
        <Map />
      </ThemeProvider>
    </>
  )
}

export default App
