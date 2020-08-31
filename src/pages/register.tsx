import React from 'react';
import { Formik, Form } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  Button,
} from '@chakra-ui/core';
import Wrapper from '../components/Wrapper';
import InputField from '../components/InputField';
import { useMutation } from 'urql';
import { useRegisterMutation } from '../generated/graphql';

export interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();
  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values) => {
          const res = await register(values);
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <Box mb='8px'>
              <InputField
                name='username'
                placeholder='username'
                label='Username'
              />
            </Box>
            <Box mb='8px'>
              <InputField
                name='password'
                placeholder='password'
                label='Password'
                type='password'
              />
            </Box>
            <Button
              mt='4'
              type='submit'
              variantColor='teal'
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
