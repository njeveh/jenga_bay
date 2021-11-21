import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';

    import { useDispatch } from 'react-redux';
  import { useHistory } from 'react-router';
  import { useState } from 'react';
import { handleResetPasswordConfirm } from '../../redux/actions/userActions';
  
  export const ResetPassword = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [password, setPassword] = useState("")
    // const [passwordResetToken, setPassworeResetToken] = useState("")

    const handleSubmit = (e) => {
      const data = {
        password: password,
        token: "3339e80fe05e5ca9fc74799213f81a093d1f",
      }
      dispatch(handleResetPasswordConfirm(data))
      history.push(`/sign-in`)
    }

    // const token = localStorage.getItem("passwordResetToken") ? JSON.parse(localStorage.getItem("passwordResetToken")) : " ";
    // setPassworeResetToken(token)
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Enter new password
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>New Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Confirm New Password</FormLabel>
            <Input type="password" onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Stack spacing={6}>
            <Button
              onClick={handleSubmit}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Reset Password
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }