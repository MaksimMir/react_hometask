import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './components/Profile/profile.reduser';
import chatReducer from './components/Chats/chat.reduser';
import messageReducer from './components/Message/message.reduser';
import dialogReducer from './components/Dialog/dialog.reduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    message: messageReducer,
    dialog: dialogReducer
});

const persistConfig = {
    key: 'message',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);
