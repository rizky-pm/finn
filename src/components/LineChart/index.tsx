import { ResponsiveLine } from '@nivo/line';
import dayjs, { Dayjs } from 'dayjs';

import { lineChartData } from '../../constant';
import LineChartToolTip from '../LineChartTooltip';
import { useTimeFilterStore } from '../../store';

import dateUtils from '../../utils/Time';

import { TransactionType } from '../../../common';

interface TransactionsType {
  items: TransactionType[];
}

const LineChart = ({ items }: TransactionsType) => {
  console.log(items);

  const tickFormatFunction = (value: number) => {
    // You can format the value as needed here

    const date = dayjs(value);
    // const formattedDate = date.format('HH:mm');

    const formattedDate = date.format('dd');
    return formattedDate;
  };

  const filterWeekly = lineChartData.map((dataset) => {
    let filteredData = [];

    // Start Of Weekly Filter-----------------------------------------------------
    const convertedData = dataset.data.map((entry) => ({
      x: dayjs(entry.x).startOf('day').valueOf(),
      y: entry.y,
    }));

    // Step 2: Group and accumulate data
    const groupedData = convertedData.reduce((acc, entry) => {
      const existingEntry = acc.find((item) => item.x === entry.x);
      if (existingEntry) {
        existingEntry.y += entry.y;
      } else {
        acc.push(entry);
      }
      return acc;
    }, [] as { x: number; y: number }[]);

    // Step 3: Create the final result array
    filteredData = groupedData.map((entry) => ({
      x: entry.x,
      y: entry.y,
    }));
    // End Of Weekly Filter-----------------------------------------------------

    filteredData.sort((a, b) => a.x - b.x);

    return { ...dataset, data: filteredData };
  });

  return (
    <>
      <ResponsiveLine
        data={filterWeekly}
        margin={{ top: 50, right: 25, bottom: 75, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 10000000,
          stacked: true,
          reverse: false,
        }}
        enableArea
        tooltip={(data) => <LineChartToolTip point={data.point} />}
        yFormat=' >-.2f'
        curve='monotoneX'
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: tickFormatFunction,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        pointSize={4}
        colors={['#48BB78']} // Change the color here
        pointColor={{ theme: 'background' }}
        pointBorderWidth={4}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        useMesh={true}
        motionConfig='slow'
      />
    </>
  );
};

export default LineChart;
