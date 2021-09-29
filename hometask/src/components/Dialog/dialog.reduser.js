import { IS_VISIBLE, IN_VISIBLE } from "./dialog.action";

const initialState = null;

const dialogReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case IS_VISIBLE:
            return payload;
        case IN_VISIBLE:
            return payload;
        default:
            return state;
    }
}

export default dialogReducer;