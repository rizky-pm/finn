import { Box, Stack } from '@chakra-ui/react';
import { PointTooltipProps } from '@nivo/line';
import dayjs from 'dayjs';

const LineChartToolTip = ({ point }: PointTooltipProps) => {
  console.log(point);
  const date = dayjs(point.data.x);
  const formattedDate = date.format('YYYY-MM-DD HH:mm:ss');

  return (
    <Box p={2} bg={'brand.black'} color={'brand.white'}>
      <Stack>
        <h1>{point.serieId}</h1>
        <span>{formattedDate}</span>
        <span>Rp {point.data.yFormatted}</span>
      </Stack>
    </Box>
  );
};

export default LineChartToolTip;
