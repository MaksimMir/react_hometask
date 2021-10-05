import { GET_TASK_LIST, ADD_TASK, SHOW_SPINNER, GET_ERROR } from "./todolist.action";

const initialState = {
    isShowErr: false,
    errorMessage: '',
    isFetch: false,
    list: []
}

const todoReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_SPINNER:
            return {
                ...state,
                isShowErr: false,
                errorMessage: '',
                isFetch: true,
            }
        case GET_TASK_LIST:
            return {
                ...state,
                isShowErr: false,
                errorMessage: '',
                isFetch: false,
                list: payload
            }
        case ADD_TASK:
            return {
                ...state,
                isShowErr: false,
                errorMessage: '',
                isFetch: false,
                list: [...state.list, payload]
            } 
        case GET_ERROR:
            return {
                ...state,
                isShowErr: payload.flag,
                errorMessage: payload.message
            }    
        default:
            return state;
    }
}

export default todoReduser;