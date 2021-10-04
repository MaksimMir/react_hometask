import { ADD_MESSAGE, SHOW_DIALOG } from './message.action';

const initialState = {
    isShow: false,
    messageList: {}
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const currentList = state.messageList[action.payload.chatId] || [];
            return {               
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: [
                        ...currentList,
                        {
                            ...action.payload.message,
                            id: `${currentList.length}`
                        }
                    ]

                }
            }
        case SHOW_DIALOG:
            return {
                ...state,
                isShow: action.payload
            }
        default:
            return state;
    }
}

export default messageReducer;