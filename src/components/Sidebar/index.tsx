import { Box, Flex, Text } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';

import { fireauth } from '../../config/firebase';

const Sidebar = () => {
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
        top={0}
        flexDirection={'column'}
        h={'100%'}
        border={'none'}
        outline={'none'}
      >
        <Box as='li'>
          <Text fontSize={'3xl'} fontWeight={'bold'} px={2}>
            Finn
          </Text>
        </Box>

        <Box as='li'>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            <Text variant={'sidebarLink'}>Dashboard</Text>
          </NavLink>
        </Box>
        <Box as='li'>
          <NavLink
            to={'/transactions'}
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            <Text variant={'sidebarLink'}>Transactions</Text>
          </NavLink>
        </Box>
        <Box as='li'>
          <NavLink
            to={'/profile'}
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            <Text variant={'sidebarLink'}>Profile</Text>
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
      </Flex>
    </Box>
  );
};

export default Sidebar;
