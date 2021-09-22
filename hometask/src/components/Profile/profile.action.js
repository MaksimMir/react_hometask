export const ADD_PROFILE = 'ADD_PROFILE';
export const DELETE_PROFILE = 'DELETE_PROFILE';

export const addProfile = profileData => {
    return {
        type: ADD_PROFILE,
        payload: {
            profileData
        }
    }
}

export const deleteProfile = id => {
    return {
        type: DELETE_PROFILE,
        payload: {
            id
        }
    }
}




