export const ADD_MESSAGE = 'ADD_MESSAGE';
export const GET_MESSAGE = 'GET_MESSAGE';
export const SHOW_DIALOG = 'SHOW_DIALOG';
const baseUrl = 'http://localhost:3001';

export const getMessage = messages => {
    return {
        type: GET_MESSAGE,
        payload: messages
    }
}

export const showWindow = flag => {
    return {
        type: SHOW_DIALOG,
        payload: flag
    }
}

export const getMessageFromDB = id => dispatch => {
    fetch(`${baseUrl}/message`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('not found')
            }
        })
        .then(data => {
            const messages = data.filter(el => {
                return el.chat_id === +id
            });
            dispatch(getMessage(messages))
        })
}

export const closeDialogWindow = () => dispatch => {
    setTimeout(() => {
        dispatch(showWindow(false))
    }, 1000)
}

export const createMessage = newMessage => dispatch => {
    fetch(`${baseUrl}/message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMessage)
    }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('not found')
        }
    })
}