export const IS_VISIBLE = 'IS_VISIBLE';
export const IN_VISIBLE = 'IN_VISIBLE';

export const isVisible = flag => {
    return {
        type: IS_VISIBLE,
        payload: flag
    }
}

export const inVisible = flag => {
    return {
        type: IN_VISIBLE,
        payload: flag
    }
}

export const setVisible = () => (dispatch) => {
    setTimeout(() => {
        dispatch(isVisible(true));
      }, 1500)
}