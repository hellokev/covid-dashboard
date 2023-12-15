import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <div style={{padding: '10px'}}>
      <h2>Deaths from COVID 2020-2021</h2>
      <LineChart
        xAxis={[{ data: [0, 50000, 100000, 200000, 400000, 600000] }]}
        series={[
          {
            data: [20, 54804, 168371, 256585, 386839, 515151],
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}