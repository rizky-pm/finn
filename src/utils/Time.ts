import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

const dateUtils = () => {
  dayjs.extend(isBetween);

  const date = dayjs();
  const currentUnix = date.valueOf();
  const dayOfWeek = date.day();
  const nDaysAgo = date.subtract(7, 'day');
  const startOfNDaysAgo = nDaysAgo.startOf('day').valueOf();

  return { dayOfWeek, nDaysAgo, startOfNDaysAgo, date, currentUnix };
};

export default dateUtils;
