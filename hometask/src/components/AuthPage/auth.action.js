export const USER_LOGIN = 'USER_LOGIN';
export const SET_ERROR = 'SET_ERROR';

const baseUrl = 'http://localhost:3001';

export const userLogin = (user) => {
    return {
        type: USER_LOGIN,
        payload: {...user}
    }
}

export const setError = message => {
    return {
        type: SET_ERROR,
        payload: message
    }
}

export const fetchUser = (user) => dispatch => {  
    fetch(`${baseUrl}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Не верный логин или пароль');
            }
        })
        .then(data => {
            if (data) {
                dispatch(userLogin(user))
            } else {
                dispatch(setError('not found'))
            }           
        })
        .catch(err => {
            dispatch(setError(err.message))
        })
}