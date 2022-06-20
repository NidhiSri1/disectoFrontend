import { ADD_COLLECTION, ADD_LOGIN } from "./Action";

export const reducer = (store, { type, payload }) => {
    switch (type) {
        case ADD_COLLECTION:
            return { ...store, collection: payload };
        case ADD_LOGIN:
            return { ...store, login: payload };
        default:
            return store;
    }
};
