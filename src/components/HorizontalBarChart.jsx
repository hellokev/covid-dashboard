import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import nationalData from '../data/national-history.json';

const chartSetting = {
  xAxis: [
    {
      label: 'Deaths caused by COVID',
    },
  ],
  width: 1000,
  height: 1000,
};

const valueFormatter = (value) => `${value}`;

function HorizontalBarChart() {
  const targetDate = '2021-03-07';
  
  // Filter stateData to include only the data for the target date
  const filteredData = nationalData.filter((data) => data.date === targetDate);

  return (
    <div>
      <BarChart
        dataset={filteredData}
        yAxis={[
          { scaleType: 'band', dataKey: 'death' },
          { scaleType: 'band', dataKey: 'deathIncrease' },
          { scaleType: 'band', dataKey: 'inIcuCumulative' },
          { scaleType: 'band', dataKey: 'inIcuCurrently' },
          { scaleType: 'band', dataKey: 'hospitalizedIncrease' },
          { scaleType: 'band', dataKey: 'hospitalizedCurrently' },
          { scaleType: 'band', dataKey: 'negative' },
          { scaleType: 'band', dataKey: 'negativeIncrease' },
          { scaleType: 'band', dataKey: 'positive' },
          { scaleType: 'band', dataKey: 'positiveIncrease' },

          { scaleType: 'band', dataKey: 'totalTestResultsIncrease' },
        ]}
        series={[
          { dataKey: 'death', label: 'Total Deaths', valueFormatter },
          { dataKey: 'deathIncrease', label: 'Death Increase', valueFormatter },
          { dataKey: 'inIcuCumulative', label: 'ICU Cumulative', valueFormatter },
          { dataKey: 'hospitalizedCumulative', label: 'Hospitalized Cumulative', valueFormatter },
          { dataKey: 'negative', label: 'Negative Tests', valueFormatter },
          { dataKey: 'negativeIncrease', label: 'Negative Increase', valueFormatter },
          { dataKey: 'positive', label: 'Positive Cases', valueFormatter },
          { dataKey: 'positiveIncrease', label: 'Positive Increase', valueFormatter },
          { dataKey: 'totalTestResultsIncrease', label: 'Total Test Results Increase', valueFormatter },
        ]}
        layout="horizontal"
        {...chartSetting}
      />

      <BarChart
        dataset={filteredData}
        yAxis={[
          { scaleType: 'band', dataKey: 'death' },
          { scaleType: 'band', dataKey: 'deathIncrease' },
          { scaleType: 'band', dataKey: 'negative' },
          { scaleType: 'band', dataKey: 'negativeIncrease' },
          { scaleType: 'band', dataKey: 'positive' },
          { scaleType: 'band', dataKey: 'positiveIncrease' },
        ]}
        series={[
          { dataKey: 'death', label: 'Total Deaths', valueFormatter },
          { dataKey: 'deathIncrease', label: 'Death Increase', valueFormatter },
          { dataKey: 'negative', label: 'Negative Tests', valueFormatter },
          { dataKey: 'negativeIncrease', label: 'Negative Increase', valueFormatter },
          { dataKey: 'positive', label: 'Positive Cases', valueFormatter },
          { dataKey: 'positiveIncrease', label: 'Positive Increase', valueFormatter },
        ]}
        layout="horizontal"
        {...chartSetting}
      />
    </div>
  );
}

export default HorizontalBarChart;
