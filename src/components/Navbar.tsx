import React from 'react';
import { Box, Flex, Link, Button } from '@chakra-ui/core';
import NextLink from 'next/link';
import { useMeQuery, useLogoutMutation } from '../generated/graphql';
import ClipLoader from 'react-spinners/ClipLoader';
import { isServer } from '../utils/isServer';

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  let body = null;
  // data is loading
  if (fetching) {
    body = <ClipLoader size={30} color={'#123abc'} loading={fetching} />;
  } else if (!data?.me) {
    // user not logged in
    body = (
      <>
        <NextLink href='/login'>
          <Link color='white' mr={4} fontWeight='bolder'>
            Login
          </Link>
        </NextLink>

        <NextLink href='/register'>
          <Link color='white' fontWeight='bolder'>
            Register
          </Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex alignItems='center'>
        <Box>{data.me.username}</Box>
        <Button
          variant='link'
          ml='4'
          onClick={() => logout()}
          isLoading={logoutFetching}
        >
          Logout
        </Button>
      </Flex>
    );
  }

  return (
    <Flex bg='tan'>
      <Box p={4} ml='auto'>
        {body}
      </Box>
    </Flex>
  );
};

export default Navbar;
