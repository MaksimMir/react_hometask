import { USER_LOGIN, SET_ERROR } from "./auth.action";

const initialState = {
    user: null,
    err: null
};

const authReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return {
                err: null,
                user: payload
            };
        case SET_ERROR:
            return {
                ...state,
                err: payload
            };
        default:
            return state;
    }
}

export default authReduser;