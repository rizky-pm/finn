import { useState, useEffect, useRef } from 'react';
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
  Stat,
  StatNumber,
  useDisclosure,
  useDimensions,
} from '@chakra-ui/react';
import { ResponsivePie } from '@nivo/pie';
import { Button } from '@chakra-ui/react';
import {
  QuerySnapshot,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import dateUtils from '../../utils/Time';
import { firestore } from '../../config/firebase';
import { useTimeFilterStore } from '../../store';
import RecentTransactionItem from '../../components/RecentTransactionItem';
import LineChart from '../../components/LineChart';
import AddNewTrxModal from '../../components/AddNewTrxModal';

import { TransactionType } from '../../../common';

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
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const { filter, setFilter } = useTimeFilterStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useFirebaseAuth();
  const { date } = dateUtils();

  const boxRef = useRef<HTMLDivElement | null>(null);
  const dimensions = useDimensions(boxRef, true);
  // console.log(dimensions);
  let fontSize = 32;

  if (dimensions) {
    fontSize = dimensions?.contentBox.height / 5;
  }

  // if (dimensions) {
  //   fontSize = dimensions?.contentBox.height / 2;
  // }

  // console.log(fontSize);

  useEffect(() => {
    if (user) {
      let dateThereshold = 0;

      switch (filter) {
        case 'daily':
          dateThereshold = date.startOf('day').valueOf();
          break;

        case 'weekly':
          console.log('weekly');
          break;
        case 'monthly':
          console.log('monthly');
          break;
        case 'yearly':
          console.log('yearly');
          break;

        default:
          break;
      }

      const unsub = onSnapshot(
        query(
          collection(firestore, 'transactions'),
          where('createdAt', '>=', dateThereshold),
          where('userId', '==', user?.uid),
          orderBy('createdAt')
        ),
        (snapshot: QuerySnapshot) => {
          const tempTrx: TransactionType[] = [];

          snapshot.forEach((doc) => {
            const data = doc.data() as TransactionType;
            tempTrx.push(data);
          });

          setTransactions(tempTrx);
        }
      );

      return () => unsub();
    }
  }, [user, filter]);

  return (
    <>
      <Grid
        sx={{
          maxHeight: 'calc(100vh - 32px)',
        }}
        // minH={'calc(100vh-16px)'}
        templateRows={'0.1fr 0.1fr 1fr'}
        // templateRows='repeat(3, 1fr)'
        templateColumns={'0.6fr 0.6fr 0.6fr 1fr'}
        // templateColumns='repeat(4, 1fr)'
        gap={4}
      >
        <GridItem colSpan={4} rowSpan={1}>
          <Flex alignItems='center' justifyContent={'space-between'}>
            <Heading size={'lg'}>Welcome, Rizky Mahendra</Heading>
            <Button ml={'auto'} mr={4} onClick={onOpen}>
              Add
            </Button>
            <Select
              placeholder='Select timeline'
              w={'15%'}
              defaultValue={filter}
              variant='filled'
              size={'sm'}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFilter(
                  e.target.value as 'daily' | 'weekly' | 'monthly' | 'yearly'
                )
              }
            >
              <option value='daily'>Daily</option>
              <option value='weekly'>Weekly</option>
              <option value='monthly'>Monthly</option>
              <option value='yearly'>Yearly</option>
            </Select>
          </Flex>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1}>
          <Card p={4} h={'150px'}>
            <Heading size={'md'}>Income</Heading>
            <Stat>
              <StatNumber>
                <Text maxW={'225px'} fontSize={'3xl'}>
                  Rp 1.000.000,00
                </Text>
              </StatNumber>
            </Stat>
          </Card>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1}>
          <Card p={4} h={'150px'}>
            <Heading size={'md'}>Outcome</Heading>
            <Stat>
              <StatNumber>
                <Text maxW={'225px'} fontSize={'3xl'}>
                  Rp 420.000,00
                </Text>
              </StatNumber>
            </Stat>
          </Card>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1}>
          <Card ref={boxRef} p={4} h={'150px'}>
            <Heading size={'md'}>Total Money</Heading>
            <Stat>
              <StatNumber>
                <Text maxW={'225px'} fontSize={'3xl'}>
                  Rp 694.200,00
                </Text>
              </StatNumber>
            </Stat>
          </Card>
        </GridItem>

        <GridItem rowSpan={4} colSpan={1}>
          <Card width={'100%'} p={4} h={'100%'}>
            <Heading size={'md'}>Recent Transaction</Heading>

            <Box w={'100%'} h={'80%'}>
              <ResponsivePie
                data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                  from: 'color',
                  modifiers: [['darker', 0.2]],
                }}
                enableArcLinkLabels={false}
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

        <GridItem colSpan={3} rowSpan={3}>
          <Card width={'100%'} p={4} h={'100%'}>
            <Heading size={'md'}>Summary</Heading>
            <LineChart items={transactions} />
          </Card>
        </GridItem>
      </Grid>

      <AddNewTrxModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Home;
