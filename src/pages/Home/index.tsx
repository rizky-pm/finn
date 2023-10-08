import {
  Box,
  Card,
  Heading,
  Grid,
  GridItem,
  Select,
  Divider,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react';

import { ResponsivePie } from '@nivo/pie';

import RecentTransactionItem from '../../components/RecentTransactionItem';

const data = [
  {
    id: 'expense',
    label: 'Expense',
    value: 50000,
    color: 'hsl(311, 70%, 50%)',
  },
  {
    id: 'income',
    label: 'Income',
    value: 25000,
    color: 'hsl(65, 70%, 50%)',
  },
];

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {
  return (
    <Grid
      sx={{
        maxHeight: 'calc(100vh - 32px)',
      }}
      // minH={'calc(100vh-16px)'}
      templateRows={'0.1fr 1fr 1fr'}
      // templateRows='repeat(3, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={4}
    >
      <GridItem colSpan={3} rowSpan={1}>
        <Flex alignItems='center' justifyContent={'space-between'}>
          <Heading size={'lg'}>Welcome, Rizky Mahendra</Heading>
          <Select
            placeholder='Select timeline'
            w={'15%'}
            defaultValue={'daily'}
            variant='filled'
          >
            <option value='daily'>Daily</option>
            <option value='weekly'>Weekly</option>
            <option value='monthly'>Monthly</option>
            <option value='yearly'>Yearly</option>
          </Select>
        </Flex>
      </GridItem>

      <GridItem colSpan={1}>
        <Card width={'100%'} p={4} h={'100%'}>
          <Heading size={'md'}>Income</Heading>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
          saepe. Laborum, harum a? Odit officiis quod soluta magnam accusantium
          mollitia ducimus voluptatum aspernatur aliquam cumque assumenda,
          molestias earum eveniet amet.
        </Card>
      </GridItem>

      <GridItem colSpan={1}>
        <Card width={'100%'} p={4} h={'100%'}>
          <Heading size={'md'}>Outcome</Heading>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
          saepe. Laborum, harum a? Odit officiis quod soluta magnam accusantium
          mollitia ducimus voluptatum aspernatur aliquam cumque assumenda,
          molestias earum eveniet amet.
        </Card>
      </GridItem>

      <GridItem rowSpan={4} colSpan={1}>
        <Card width={'100%'} p={4} h={'100%'}>
          <Heading size={'md'}>Recent Transaction</Heading>

          <Box w={'100%'} h={'60%'}>
            <ResponsivePie
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              // innerRadius={0.5}
              // padAngle={0.7}
              // cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 0.2]],
              }}
              enableArcLinkLabels={false}
              // arcLinkLabelsSkipAngle={10}
              // arcLinkLabelsTextColor='#333333'
              // arcLinkLabelsThickness={2}
              // arcLinkLabelsColor={{ from: 'color' }}
              // arcLabelsSkipAngle={10}
              // arcLabelsTextColor={{
              //   from: 'color',
              //   modifiers: [['darker', 2]],
              // }}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: 'income',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'expense',
                  },
                  id: 'lines',
                },
              ]}
              // legends={[
              //   {
              //     anchor: 'bottom',
              //     direction: 'row',
              //     justify: false,
              //     translateX: 0,
              //     translateY: 56,
              //     itemsSpacing: 0,
              //     itemWidth: 100,
              //     itemHeight: 18,
              //     itemTextColor: '#999',
              //     itemDirection: 'left-to-right',
              //     itemOpacity: 1,
              //     symbolSize: 18,
              //     symbolShape: 'circle',
              //     effects: [
              //       {
              //         on: 'hover',
              //         style: {
              //           itemTextColor: '#000',
              //         },
              //       },
              //     ],
              //   },
              // ]}
            />
          </Box>

          <Divider color={'brand.whitePlatinum'} />

          <Stack
            as={'ul'}
            spacing={2}
            h={'100%'}
            overflow={'auto'}
            p={2}
            mt={2}
          >
            {test.map((item) => {
              return <RecentTransactionItem key={item} />;
            })}
          </Stack>
        </Card>
      </GridItem>

      <GridItem colSpan={2} rowSpan={3}>
        <Card width={'100%'} p={4} h={'100%'}>
          <Heading size={'md'}>Summary</Heading>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
          saepe. Laborum, harum a? Odit officiis quod soluta magnam accusantium
          mollitia ducimus voluptatum aspernatur aliquam cumque assumenda,
          molestias earum eveniet amet.
        </Card>
      </GridItem>
    </Grid>
  );
};

export default Home;
