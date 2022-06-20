import { useState } from "react";

import { SignUp } from "./components/signIn";
import "./App.css";
import { Login } from "./components/login";
import { Routes, Route } from "react-router-dom";
import { CollectionList } from "./components/collectionList";
import { AddCollection } from "./components/addCollection";
import { NoMatch } from "./components/noMatch";
import { useSelector } from "react-redux";
import { PrivateRoute } from "./privateRoute/privateRoute";
function App() {
    const [count, setCount] = useState(0);
    const isAuthiticated = localStorage.getItem("id");
    console.log("isAuthiticated:", isAuthiticated);
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/collectionlist"
                    element={
                        <PrivateRoute isAuthiticated={isAuthiticated}>
                            <CollectionList></CollectionList>
                        </PrivateRoute>
                    }
                ></Route>

                <Route
                    path="/addcollection"
                    element={
                        <PrivateRoute isAuthiticated={isAuthiticated}>
                            <AddCollection></AddCollection>
                        </PrivateRoute>
                    }
                ></Route>
                <Route path="/" element={<SignUp></SignUp>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default App;
