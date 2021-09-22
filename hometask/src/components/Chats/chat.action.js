export const ADD_CHAT = 'ADD_CHAT';
export const DELETE_CHAT = 'DELETE_CHAT';

export const addChat = chatData => {
    return {
        type: ADD_CHAT,
        payload: {
            chatData
        }
    }
}

export const deleteChat = id => {
    return {
        type: DELETE_CHAT,
        payload: {
            id
        }
    }
}