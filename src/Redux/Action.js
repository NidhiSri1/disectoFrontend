export const ADD_COLLECTION = "ADD_COLLECTION";
export const ADD_LOGIN = "ADD_LOGIN";

export const add_collection = (payload) => {
    return { type: ADD_COLLECTION, payload: payload };
};

export const add_login = (payload) => {
    return { type: ADD_LOGIN, payload: payload };
};
