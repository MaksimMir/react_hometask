import { GET_CHAT, ADD_CHAT } from './chat.action.js';

const initialState = [];

const chatReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CHAT:
            return [...payload]
        case ADD_CHAT:
            return [...state, payload]
        default:
            return state;
    }
}

export default chatReducer;