import * as React from 'react';
import nationalData from '../data/national-history.json';
import { PieChart } from '@mui/x-charts/PieChart';

const targetDate = '2021-03-07';

// Filter stateData to include only the data for the target date
const filteredData = nationalData.filter((data) => data.date === targetDate);

// Extract relevant information for the PieChart
const pieChartData = [
  { label: 'Hospitalized Currently', value: filteredData[0].hospitalizedCurrently },
  { label: 'Negative Increase', value: filteredData[0].negativeIncrease },
  { label: 'Positive Increase', value: filteredData[0].positiveIncrease },
  { label: 'In ICU Currently', value: filteredData[0].inIcuCurrently },
];

const pieChartDataDeathsRecovered = [
  { label: 'Deaths', value: filteredData[0].death },
  { label: 'Recovered', value: filteredData[0].recovered },
];

export default function PieChartComponent() {
  return (
    <>
      <h2>United States of America&apos;s COVID Stats in a Pie Chart</h2>
      <PieChart
        series={[
          {
            data: pieChartData,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={200}
        width={600}
      />
      <h2>Recovered to Death Ratio</h2>
      <PieChart
        series={[
          {
            data: pieChartDataDeathsRecovered,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={200}
        width={600}
      />
    </>
  );
}
