import './App.css'
import CovidTable from './components/CovidTable'
import Map from './components/Map.jsx'
import Legend from './components/Legend.jsx';

function App() {
  return (
    <>
      <h1>COVID-19 Dashboard</h1>
      <CovidTable />
      <Map />
      <Legend />
    </>
  )
}

export default App
