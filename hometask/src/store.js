import { createStore, combineReducers } from 'redux';
import profileReduser from './components/Profile/profile.reduser';
import chatReduser from './components/Chats/chat.reduser';
import messageReduser from './components/Message/message.reduser';
import { composeWithDevTools } from 'redux-devtools-extension'

const reduser = combineReducers({
    profile: profileReduser,
    chat: chatReduser,
    message: messageReduser
})
const store = createStore(reduser, composeWithDevTools());

export default store;