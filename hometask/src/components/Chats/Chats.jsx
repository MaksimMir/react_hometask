import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getChatList, addChat } from './chat.action';
import ChatsList from "../ChatsList/ChatsList";
import Message from "../Message/Message";
import MessageScreen from "../MessageScreen/MessageScreen";
import './Chats.scss'


const Chats = () => {
    const [ chatName, setChatName ] = useState('');    
    const chatDispatch = useDispatch();

    const chatCreate = (evt) => {
        evt.preventDefault();
        const newChat = {
            id: null,
            name: chatName
        }
        chatDispatch(addChat(newChat));
        setChatName('');
    };

    useEffect(() => {
        chatDispatch(getChatList())
    }, []);

    return (
        <div className="chatpage">
            <div className="chatpage__nav">
                <ChatsList />
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
                        <MessageScreen />
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default Chats;