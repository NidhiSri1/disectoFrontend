import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
} from "@chakra-ui/react";

export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [signUpDetails, setSignUpDetails] = useState({
        email: "",
        password: "",
    });

    const handleShowClick = () => setShowPassword(!showPassword);
    const handleChange = (e) => {
        setSignUpDetails({
            ...signUpDetails,
            [e.target.name]: e.target.value,
        });
    };
    // console.log(signUpDetails);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = await axios.post("http://localhost:4000", signUpDetails);

            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Heading>Sign Up</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form>
                        <Stack
                            spacing={4}
                            p="1rem"
                            boxShadow="md"
                            borderRadius="lg"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none" />
                                    <Input
                                        type="email"
                                        placeholder="email address"
                                        name="email"
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                    />
                                    <Input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button
                                            h="1.75rem"
                                            size="sm"
                                            onClick={handleShowClick}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText textAlign="right"></FormHelperText>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                width="full"
                                bg="#64dfdf"
                                onClick={handleSubmit}
                            >
                                Sign Up
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box color="#64dfdf">
                <Link to="/login">Already Have Account? Login</Link>
            </Box>
        </Flex>
    );
};
