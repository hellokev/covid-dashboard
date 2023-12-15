import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {

  const years = [
    new Date(2020, 1, 1),
    new Date(2020, 2, 2),
    new Date(2020, 3, 3),
    new Date(2020, 4, 4),
    new Date(2020, 5, 5),
    new Date(2020, 6, 6),
    new Date(2020, 7, 7),
    new Date(2020, 8, 8),
    new Date(2020, 9, 9),
    new Date(2020, 10, 10),
    new Date(2020, 11, 11),
    new Date(2020, 12, 12),
    new Date(2021, 1, 1),
    new Date(2021, 2, 2),
    new Date(2021, 3, 3),
    new Date(2021, 4, 4),
    new Date(2021, 5, 5),
    new Date(2021, 6, 6),
    new Date(2021, 7, 7),
    new Date(2021, 8, 8),
    new Date(2021, 9, 9),
    new Date(2021, 10, 10),
    new Date(2021, 11, 11),
    new Date(2021, 12, 12),
  ];
  
  const Omnicron = [
    37895, 38515, 39000, 40000, 42000, 44000, 46000, 48000, 50000, 52000, 54000, 56000,
    58000, 60000, 62000, 64000, 66000, 68000, 70000, 72000, 74000, 76000, 78000, 80000,
  ];
  
  const Delta = [
    45619, 46177, 46500, 47000, 48000, 50000, 52000, 54000, 56000, 58000, 60000, 62000,
    64000, 66000, 68000, 70000, 72000, 74000, 76000, 78000, 80000, 82000, 84000, 86000,
  ];
  
  
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'space-evenly', padding: '10px'}}>
      <div className='Deaths'>
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
      
      <div className='Variant'>
      <h2>Delta & Omnicron Cases</h2>
        <LineChart
        sx={{
          '& .MuiLineElement-root': {
            strokeDasharray: '10 5',
            strokeWidth: 5,
          },
          '& .MuiAreaElement-series-Delta': {
            fill: "url('#myGradient')",
          },
        }}
        xAxis={[
          {
            id: 'Years',
            data: years,
            scaleType: 'time',
            valueFormatter: (date) => date.getFullYear().toString(),
          },
        ]}
        series={[
          {
            id: 'Delta',
            data: Delta,
            label: 'Delta',
            stack: 'total',
            area: true,
            showMark: false,
          },
          {
            id: 'Omnicron',
            data: Omnicron,
            label: 'Omnicron',
            stack: 'total',
            area: true,
            showMark: false,
          },
        ]}
        margin={{ left: 60, top: 10, right: 20 }}
        width={600}
        height={300}
      >
          <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(90)">
              <stop offset="5%" stopColor="gold" />
              <stop offset="95%" stopColor="red" />
            </linearGradient>
          </defs>
    </LineChart>
    </div>
    </div>
    </>
  );
}