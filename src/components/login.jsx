import { useState } from "react";
import { Link } from "react-router-dom";
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
import axios from "axios";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [signUpDetails, setSignUpDetails] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setSignUpDetails({
            ...signUpDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleShowClick = () => setShowPassword(!showPassword);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = await axios.post(
                "http://localhost:4000/login",
                signUpDetails
            );

            localStorage.setItem("id", data.data.user._id);
            navigate("/collectionlist");
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
                <Heading>Login</Heading>
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
                                        onChange={handleChange}
                                        name="email"
                                        type="email"
                                        placeholder="email address"
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
                                onClick={handleSubmit}
                                bg="#64dfdf"
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box color="#64dfdf">
                <Link to="/">Already Have Account? SignUp</Link>
            </Box>
        </Flex>
    );
};
