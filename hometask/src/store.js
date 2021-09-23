import { createStore, combineReducers } from 'redux';
import profileReduser from './components/Profile/profile.reduser';
import chatReduser from './components/Chats/chat.reduser';
import { composeWithDevTools } from 'redux-devtools-extension'

const reduser = combineReducers({
    profile: profileReduser,
    chat: chatReduser
})
const store = createStore(reduser, composeWithDevTools());

export default store;