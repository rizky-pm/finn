import { Box, Text, Stack } from '@chakra-ui/react';
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
      <Stack as={'ul'} pos={'sticky'} spacing={2} top={0} h={'100%'}>
        <Box as='li'>
          <Text fontSize={'3xl'} fontWeight={'bold'} px={2}>
            Finn
          </Text>
        </Box>

        <Box as='li'>
          <NavLink to={'/'}>
            <Text
              variant={pathname === '/' ? 'sidebarLinkActive' : 'sidebarLink'}
            >
              Dashboard
            </Text>
          </NavLink>
        </Box>

        <Box as='li'>
          <NavLink to={'/transactions'}>
            <Text
              variant={
                pathname === '/transactions'
                  ? 'sidebarLinkActive'
                  : 'sidebarLink'
              }
            >
              Transactions
            </Text>
          </NavLink>
        </Box>

        <Box as={'li'}>
          <NavLink to={'/profile'}>
            <Text
              variant={
                pathname === '/profile' ? 'sidebarLinkActive' : 'sidebarLink'
              }
            >
              Profile
            </Text>
          </NavLink>
        </Box>

        <Box as='li' mt={'auto'}>
          <Text
            variant={'sidebarLink'}
            onClick={() => {
              signOut(fireauth);
            }}
          >
            Sign Out
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
