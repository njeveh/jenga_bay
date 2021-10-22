import { FormControl } from "@chakra-ui/react"
import { Input, InputGroup, InputRightElement,InputLeftElement } from "@chakra-ui/input"
import { useState } from "react"
import { Button } from "@chakra-ui/button"
import { Box, VStack, Text, HStack, Stack, Divider, Flex } from "@chakra-ui/layout"
import { HiOutlineMail } from "react-icons/hi"
import { IoIosPerson } from "react-icons/io"
import { BiLockAlt } from "react-icons/bi"
import { Image } from "@chakra-ui/image"
import facebookIcon from "../../assets/facebook.png"
import googleIcon from "../../assets/Google.png"
import linkedInIcon from "../../assets/linkedin.png"

const SignUpForm = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return(
        <Flex flexDirection="column" mt={5}>
            <Text align="center" fontSize="4xl">Create an Account</Text>
            <HStack alignSelf="center" mt={5} mb={3}>
                <Image src={facebookIcon} />
                <Image src={googleIcon} />
                <Image src={linkedInIcon} />
            </HStack>
            <Stack direction="row" p={4}>
                <Divider orientation="horizontal" />
                <Text align="center">OR</Text>
                <Divider orientation="horizontal" />
            </Stack>
            <Text align="center" fontSize="md">sign up with your email address</Text>
            <VStack spacing="10px" pl={20} pr={20} pt={4} pb={4}>
                <FormControl id="username" isRequired>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<IoIosPerson  h={4} w={4} color="gray.300" />}/> 
                        <Input _placeholder={{ color: 'gray.500' }} variant="filled" size="md" placeholder="Username" type="text" />
                    </InputGroup>
                </FormControl>
                <FormControl id="email" isRequired>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<HiOutlineMail color="gray.300" />}/> 
                        <Input variant="filled" size="md" placeholder="Enter Email Address" type="email" />
                    </InputGroup>
                </FormControl>
                <FormControl id="password" isRequired>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<BiLockAlt color="gray.300" />}/> 
                        <Input variant="filled" pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" size="md"/>
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}> {show ? "Hide" : "Show"}</Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </VStack>
            <Flex pl={20} pr={20} >
                <Input width="3px" height="20px" type="checkbox"></Input>
                <Text align="center" fontSize="xs">By creating an account, you agree to the terms of service and conditions, and Privacy Policy</Text>
            </Flex>
            <Button alignSelf='center' padding="10px" background="#007ACC" borderRadius="50px" width="300px" height="35px" color="#ffffff">Sign Up</Button>
            <Text align="center" fontSize="xs">Already have an account?<Box as="span" background="#007ACC" > Log in</Box></Text>
        </Flex>
    )
}
export default SignUpForm;