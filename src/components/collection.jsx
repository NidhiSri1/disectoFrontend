import { Box, Badge, Image, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// Sample card from Airbnb

export function Collection(props) {
    const { id, myImg, myDesp, del } = props;
    const x = myImg.split("\\");

    const handelDeleteCollection = async (id) => {
        // console.log(id);
        try {
            let data = await axios.delete(
                `http://localhost:4000/collection/${id}`
            );
            del();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Box
                margin={4}
                maxW="xs"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
            >
                <img
                    src={`http://localhost:4000/static/${x[x.length - 1]}`}
                    alt={"no img"}
                />

                <Box p="6" bg="white">
                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        noOfLines={1}
                        bg="white"
                    >
                        {myDesp}
                    </Box>
                    <Button
                        bg="#64dfdf"
                        onClick={() => handelDeleteCollection(id)}
                    >
                        Delete Collection
                    </Button>
                </Box>
            </Box>
        </>
    );
}
