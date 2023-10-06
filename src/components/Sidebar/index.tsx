import { Box, Flex, Text } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { NavLink, useLocation } from 'react-router-dom';

import { fireauth } from '../../config/firebase';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      as='nav'
      width={'15%'}
      bg={'brand.black'}
      color={'brand.white'}
      h={'100vh'}
      pos={'sticky'}
      top={0}
      p={4}
    >
      <Flex
        as={'ul'}
        pos={'sticky'}
        rowGap={2}
        top={0}
        flexDirection={'column'}
        h={'100%'}
        border={'none'}
        outline={'none'}
      >
        <Text as={'li'} fontSize={'3xl'} fontWeight={'bold'} px={2}>
          Finn
        </Text>

        <Text
          as={'li'}
          variant={pathname === '/' ? 'sidebarLinkActive' : 'sidebarLink'}
        >
          <NavLink to={'/'}>Dashboard</NavLink>
        </Text>

        <Text
          as={'li'}
          variant={
            pathname === '/transactions' ? 'sidebarLinkActive' : 'sidebarLink'
          }
        >
          <NavLink to={'/transactions'}>Transactions</NavLink>
        </Text>

        <Text
          as={'li'}
          variant={
            pathname === '/profile' ? 'sidebarLinkActive' : 'sidebarLink'
          }
        >
          <NavLink to={'/profile'}>Profile</NavLink>
        </Text>

        <Text
          as={'li'}
          mt={'auto'}
          variant={'sidebarLink'}
          onClick={() => {
            signOut(fireauth);
          }}
        >
          Sign Out
        </Text>
      </Flex>
    </Box>
  );
};

export default Sidebar;
