import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as chatActions from './chat.action';
import ChatsList from "../ChatsList/ChatsList";
import Message from "../Message/Message";
import MessageScreen from "../MessageScreen/MessageScreen";
import './Chats.scss'


const Chats = () => {
    const [ chatName, setChatName ] = useState('');


    const chatList = useSelector(state => state.chat.chatList);
    const chatDispatch = useDispatch();

    const message = useSelector(state => state.message.messageList);

    const chatCreate = () => {
        const newChat = {
            name: chatName,
            messages: []
        }

        chatDispatch(chatActions.addChat(newChat));
    }
    return (
        <div className="chatpage">
            <div className="chatpage__nav">
                <ChatsList chat={chatList} />
            </div>

            <Switch>
                <Route exact path="/chats">
                    <p>Select a chat please</p>
                    <div className="chat">
                        <input value={chatName} onChange={evt => setChatName(evt.target.value)} type="text" className="chat__name" />
                        <button onClick={chatCreate} className="chat__btn">Create</button>
                    </div>
                </Route>
                <Route path="/chats/:chatId">
                    <div className="chatpage__messages">
                        <Message />
                        <MessageScreen message={message} />
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default Chats;