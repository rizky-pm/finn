import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const RecentTransactionItem = () => {
  return (
    <Box
      as='li'
      rounded={2}
      bg={'brand.black'}
      color={'brand.white'}
      px={4}
      py={2}
    >
      <SimpleGrid columns={2} spacing={2}>
        <Box>
          <Text>Title</Text>
        </Box>
        <Box textAlign={'right'}>
          <Text>Date</Text>
        </Box>
        <Box>
          <Text>Transaction ID</Text>
        </Box>
        <Box textAlign={'right'}>
          <Text>(+)/(-) Amount</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default RecentTransactionItem;
