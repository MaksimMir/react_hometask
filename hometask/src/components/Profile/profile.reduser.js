import { ADD_PROFILE, DELETE_PROFILE } from './profile.action.js';

const initialState = {
    profileList: []
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE:
            return {
                ...state,
                profileList: state.profileList.concat(action.payload.profileData)
            }
        case DELETE_PROFILE:
            const newList = state.profileList.filter(profile => {
                return profile.id !== action.payload.id
            })
            return {
                ...state,
                profileList: newList
            }
    
        default:
            return state;
    }
}

export default profileReducer;