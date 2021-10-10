export const GET_CHAT = 'DELETE_CHAT';
export const ADD_CHAT = 'ADD_CHAT';
const baseUrl = 'http://localhost:3001';

export const getChat = chatList => {
    return {
        type: GET_CHAT,
        payload: chatList
    }
}

export const addNewChat = newChat => {
    return {
        type: ADD_CHAT,
        payload: newChat
    }
}

export const getChatList = () => dispatch => {
    fetch(`${baseUrl}/chats`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('not found')
            }
        })
        .then(data => {
            dispatch(getChat(data))
        })
        .catch(err => {
            console.log(err)
        })
}

export const addChat = chat => dispatch => {
    fetch(`${baseUrl}/chats`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('not found')
        }
    })
}

export const deleteChat = chatId => dispatch => {
    fetch(`${baseUrl}/chats/${chatId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                return dispatch(getChatList());
            } else {
                throw new Error('Такого элемента не существует')
            }           
        })
        .catch(err => {
            console.log(err)
        })
}