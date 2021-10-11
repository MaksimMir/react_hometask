import { GET_CHAT } from './chat.action.js';

const initialState = [];

const chatReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CHAT:
            return [...payload]
        default:
            return state;
    }
}

export default chatReducer;