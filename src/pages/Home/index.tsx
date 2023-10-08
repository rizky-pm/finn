import {
  Box,
  Card,
  Heading,
  Flex,
  Grid,
  GridItem,
  Stat,
  StatNumber,
  StatGroup,
  Divider,
} from '@chakra-ui/react';

import { ResponsivePie } from '@nivo/pie';

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

const Home = () => {
  return (
    <Grid
      minH={'350px'}
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      bg={'yellow.200'}
    >
      <GridItem colSpan={2} bg='papayawhip'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
        saepe. Laborum, harum a? Odit officiis quod soluta magnam accusantium
        mollitia ducimus voluptatum aspernatur aliquam cumque assumenda,
        molestias earum eveniet amet.
      </GridItem>
      <GridItem colSpan={2} bg='papayawhip'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
        saepe. Laborum, harum a? Odit officiis quod soluta magnam accusantium
        mollitia ducimus voluptatum aspernatur aliquam cumque assumenda,
        molestias earum eveniet amet.
      </GridItem>
      <GridItem rowSpan={2} colSpan={2} bg='tomato'>
        <Card width={'100%'} p={4} h={'100%'}>
          <Heading size={'md'}>Summary</Heading>
          {/* <Text>View a summary of all your expense for today.</Text> */}

          <ResponsivePie
            data={data}
            margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
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
        </Card>
      </GridItem>
      <GridItem colSpan={4} bg='tomato'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
        saepe. Laborum, harum a? Odit officiis quod soluta magnam accusantium
        mollitia ducimus voluptatum aspernatur aliquam cumque assumenda,
        molestias earum eveniet amet.
      </GridItem>
    </Grid>
    // <Box as='main' border={0}>
    //   <Flex columnGap={4}>
    //     <Card width={'100%'} p={4}>
    //       <Heading size={'md'}>Income</Heading>
    //       <Divider color={'brand.whitePlatinum'} my={2} />
    //       <StatGroup>
    //         <Stat>
    //           <StatNumber>Rp. 420,690</StatNumber>
    //         </Stat>
    //       </StatGroup>
    //     </Card>

    //     <Card width={'100%'} p={4}>
    //       <Heading size={'md'}>Expense</Heading>
    //       <Divider color={'brand.whitePlatinum'} my={2} />
    //       <StatGroup>
    //         <Stat>
    //           <StatNumber>Rp. 420,690</StatNumber>
    //         </Stat>
    //       </StatGroup>
    //     </Card>

    //     <Card width={'100%'} p={4} h={'300px'}>
    //       <Heading size={'md'}>Summary</Heading>
    //       {/* <Text>View a summary of all your expense for today.</Text> */}

    //   <ResponsivePie
    //     data={data}
    //     margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
    //     // innerRadius={0.5}
    //     // padAngle={0.7}
    //     // cornerRadius={3}
    //     activeOuterRadiusOffset={8}
    //     borderWidth={1}
    //     borderColor={{
    //       from: 'color',
    //       modifiers: [['darker', 0.2]],
    //     }}
    //     enableArcLinkLabels={false}
    //     // arcLinkLabelsSkipAngle={10}
    //     // arcLinkLabelsTextColor='#333333'
    //     // arcLinkLabelsThickness={2}
    //     // arcLinkLabelsColor={{ from: 'color' }}
    //     // arcLabelsSkipAngle={10}
    //     // arcLabelsTextColor={{
    //     //   from: 'color',
    //     //   modifiers: [['darker', 2]],
    //     // }}
    //     defs={[
    //       {
    //         id: 'dots',
    //         type: 'patternDots',
    //         background: 'inherit',
    //         color: 'rgba(255, 255, 255, 0.3)',
    //         size: 4,
    //         padding: 1,
    //         stagger: true,
    //       },
    //       {
    //         id: 'lines',
    //         type: 'patternLines',
    //         background: 'inherit',
    //         color: 'rgba(255, 255, 255, 0.3)',
    //         rotation: -45,
    //         lineWidth: 6,
    //         spacing: 10,
    //       },
    //     ]}
    //     fill={[
    //       {
    //         match: {
    //           id: 'income',
    //         },
    //         id: 'dots',
    //       },
    //       {
    //         match: {
    //           id: 'expense',
    //         },
    //         id: 'lines',
    //       },
    //     ]}
    //     // legends={[
    //     //   {
    //     //     anchor: 'bottom',
    //     //     direction: 'row',
    //     //     justify: false,
    //     //     translateX: 0,
    //     //     translateY: 56,
    //     //     itemsSpacing: 0,
    //     //     itemWidth: 100,
    //     //     itemHeight: 18,
    //     //     itemTextColor: '#999',
    //     //     itemDirection: 'left-to-right',
    //     //     itemOpacity: 1,
    //     //     symbolSize: 18,
    //     //     symbolShape: 'circle',
    //     //     effects: [
    //     //       {
    //     //         on: 'hover',
    //     //         style: {
    //     //           itemTextColor: '#000',
    //     //         },
    //     //       },
    //     //     ],
    //     //   },
    //     // ]}
    //   />
    // </Card>
    //   </Flex>
    // </Box>
  );
};

export default Home;
