export const GET_TASK_LIST = 'GET_TASK_LIST';
export const ADD_TASK = 'ADD_TASK';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const GET_ERROR = 'GET_ERROR';

const baseUrl = 'https://61431269c8700e00178d00e5.mockapi.io/api/v1/tasks';

export const getError = (flag, message) => {
    return {
        type: GET_ERROR,
        payload: {
            flag,
            message
        }
    }
}

export const closeErrorWindow = () => dispatch => {
    setTimeout(() => {
        dispatch(getError(false, ''))
    }, 1500)
}

export const getTaskList = list => {
    return {
        type: GET_TASK_LIST,
        payload: list
    }
}

export const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const showSpinner = () => {
    return {
        type: SHOW_SPINNER
    }
}

export const deleteOneTask = taskId => dispatch => {
    fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                return dispatch(getTask());
            } else {
                throw new Error('Такого элемента не существует')
            }           
        })
        .catch(err => {
            dispatch(getError(true, err.message))
        })
}

export const createNewTask = newTask => dispatch => {
    dispatch(showSpinner());
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'ContentType': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Отправлены не верные данные')
        } 
    })
    .then(data => {
        dispatch(addTask(data))
    })
    .catch(err => {
        dispatch(getError(true, err.message))
    })
}

export const getTask = () => dispatch => {  
    dispatch(showSpinner());
    fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Произошла ошибка при получении данных');
            }
        })
        .then(taskList => {
            dispatch(getTaskList(taskList))
        })
        .catch(err => {
            dispatch(getError(true, err.message))
        })
}