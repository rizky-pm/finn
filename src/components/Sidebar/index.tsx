import { Box, Flex, Text } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box
      as='nav'
      width={'15%'}
      bg={'brand.black'}
      color={'brand.white'}
      px={6}
      py={4}
      minHeight={'100vh'}
    >
      <Box position={'fixed'}>
        <Flex flexDirection={'column'}>
          <Text fontSize={'3xl'} fontWeight={'bold'}>
            Finn
          </Text>

          <ul>
            <Box as='li' bg={'red.500'}>
              Dashboard
            </Box>
            <Box as='li'>Transactions</Box>
            <Box as='li'>Profile</Box>
            <Box as='li'>Sign Out</Box>
          </ul>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
