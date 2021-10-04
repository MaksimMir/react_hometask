export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SHOW_DIALOG = 'SHOW_DIALOG';


export const addMessage = (chatId, message) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            chatId,
            message
        }
    }
}

export const showWindow = flag => {
    return {
        type: SHOW_DIALOG,
        payload: flag
    }
}

export const closeDialogWindow = () => dispatch => {
    setTimeout(() => {
        dispatch(showWindow(false))
    }, 1000)
}