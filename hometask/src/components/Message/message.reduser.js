import { ADD_MESSAGE } from './message.action';

const initialState = {
    messageList: {}
}

const messageReduser = (state = initialState, action) => {
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
    
        default:
            return state;
    }
}

export default messageReduser;