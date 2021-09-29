import { ADD_CHAT, DELETE_CHAT } from './chat.action.js';

const initialState = {
    chatList: [
        {
            name: "Chat1",
            messages: [{ text: "FirstMessage", author: 'AUTHORS.BOT', id: 1 }],
        },
        {
            name: "Chat2",
            messages: [
                { text: "FirstMessageHereToo!", author: 'AUTHORS.ME', id: 1 },
                { text: "TwoMessageHereToo!", author: 'AUTHORS.ME', id: 2 }
            ],
        },
    ]
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: state.chatList.concat(action.payload.chatData)
            }
        case DELETE_CHAT:
            const newList = state.chatst.filter(chat => {
                return chat.id !== action.payload.id
            })
            return {
                ...state,
                chatList: newList
            }
    
        default:
            return state;
    }
}

export default chatReducer;