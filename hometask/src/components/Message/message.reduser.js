import { ADD_MESSAGE, GET_MESSAGE, SHOW_DIALOG } from './message.action';

const initialState = {
    isShow: false,
    messageList: []
}

const messageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_MESSAGE:
            return {
                ...state,
                messageList: [...payload]
            }
        case ADD_MESSAGE:
            return {               
                ...state,
                messageList: [ ...state, payload]
            }
        case SHOW_DIALOG:
            return {
                ...state,
                isShow: payload
            }
        default:
            return state;
    }
}

export default messageReducer;