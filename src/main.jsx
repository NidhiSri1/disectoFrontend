import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
