import { Box, Flex, Grid, Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_collection } from "../Redux/Action";
import { Collection } from "./Collection";
import { SmallAddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const CollectionList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { collection } = useSelector((store) => store);
    // console.log(collection);
    useEffect(() => {
        handleGet();
    }, []);
    const handleGet = async () => {
        try {
            let data = await axios.get("http://localhost:4000/collection");
            console.log("data", data);

            dispatch(add_collection(data.data));
        } catch (err) {
            console.log(err);
            // alert("Please Login ");
        }
    };

    const handleLogout = () => {
        localStorage.setItem("id", "");
        navigate("/login");
    };

    return (
        <Box margin={5}>
            <Flex templateColumns="repeat(3, 1fr)" justify={"space-between"}>
                <Heading marginRight={10} color="#64dfdf">
                    Collection
                </Heading>
                <Button
                    marginLeft={10}
                    borderRadius={5}
                    bg="#64dfdf"
                    onClick={() => navigate("/addcollection")}
                >
                    Add Collection
                </Button>
                <Button bg="#64dfdf" onClick={handleLogout}>
                    Logout
                </Button>
            </Flex>
            <Grid templateColumns="repeat(3, 1fr)">
                {/* {collection.map((e) => (
                    <>
                        <Collection delFunc={handelDeleteCollection} />
                    </>
                ))} */}
                {collection.map((e) => {
                    return (
                        <>
                            <Collection
                                myImg={e.pictures}
                                myDesp={e.description}
                                id={e._id}
                                del={handleGet}
                            />
                        </>
                    );
                })}
            </Grid>
        </Box>
    );
};
