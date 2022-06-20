import { createStore } from "redux";
import { reducer } from "./reducer";

const init = { collection: [], login: "" };
export const store = createStore(reducer, init);
