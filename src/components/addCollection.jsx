import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const AddCollection = () => {
    const [myFile, addFile] = useState("");
    const [desp, setDesp] = useState("");
    const navigate = useNavigate();
    const onChangeHandler = (event) => {
        addFile(event.target.files[0]);
    };
    const onChangeHandler1 = (event) => {
        setDesp(event.target.value);
    };

    const onBtnClick = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("pictures", myFile); // mind the schema key name, here (pictures in backend)
        formData.append("description", desp);
        console.log(formData);
        axios
            .post("http://localhost:4000/collection", formData)
            .then((res) => alert("Collection Added"))
            .catch((err) => {
                console.log(err.response.data.messgae);
            });
    };

    return (
        <FormControl w={300} m={7}>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input
                id="description"
                name="description"
                type="text"
                onChange={onChangeHandler1}
            />
            <FormHelperText>Enter description of collection</FormHelperText>

            <FormLabel htmlFor="file">Image</FormLabel>
            <Input
                id="image"
                name="image"
                type="file"
                onChange={onChangeHandler}
            />
            <FormHelperText>Enter thumbnail of your collection</FormHelperText>

            <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                width="full"
                bg="#64dfdf"
                onClick={onBtnClick}
            >
                Add Collection
            </Button>
            <Button
                marginTop={5}
                borderRadius={0}
                type="submit"
                variant="solid"
                width="full"
                bg="#64dfdf"
                onClick={() => navigate("/collectionlist")}
            >
                Back
            </Button>
        </FormControl>
    );
};

// import React, { useState } from "react";
// import axios from "axios";

// const AddCollection = () => {
//     const [myFile, addFile] = useState("");
//     const onChangeHandler = (event) => {
//         addFile(event.target.files[0]);
//     };

//     const onBtnClick = (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append("pictures", myFile); // mind the schema key name, here (pictures in backend)
//         console.log(formData);
//         axios
//             .post("http://localhost:4000/collection", formData)
//             .then((res) => console.log(res));
//     };

//     return (
//         <div>
//             <form>
//                 <h3>React File Upload</h3>
//                 <div className="form-group">
//                     <input type="file" onChange={onChangeHandler} />
//                 </div>
//                 <div className="form-group">
//                     <button
//                         onClick={onBtnClick}
//                         className="btn btn-primary"
//                         type="submit"
//                     >
//                         Upload
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddCollection;
