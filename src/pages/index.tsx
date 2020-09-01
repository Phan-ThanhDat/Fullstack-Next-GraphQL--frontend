import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/core';
import Navbar from '../components/Navbar';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';

const Index = () => (
  <>
    <Navbar />
    <div>hello</div>
  </>
);
export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
