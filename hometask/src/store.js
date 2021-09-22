import { createStore, combineReducers } from 'redux';
import profileReduser from './components/Profile/profile.reduser';
import chatReduser from './components/Chats/chat.reduser';

const reduser = combineReducers({
    profile: profileReduser,
    chat: chatReduser
})
const store = createStore(reduser);

export default store;