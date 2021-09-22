import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import * as chatActions from './chat.action';
import ChatsList from "../ChatsList/ChatsList";
import MessageScreen from "../MessageScreen/MessageScreen";


const Chats = ({ chatList, addChat }) => {
    const [ chatName, setChatName ] = useState('');


    const chatCreate = () => {
        const newChat = {
            name: chatName,
            messages: []
        }

        addChat(newChat);
    }
    return (
        <>
        <ul>
            <ChatsList chat={chatList} />
        </ul>

        <Switch>
            <Route exact path="/chats">
                <p>Select a chat please</p>
                <div className="chat__create">
                    <input value={chatName} onChange={evt => setChatName(evt.target.value)} type="text" className="create__name" />
                    <button onClick={chatCreate} className="create__btn">Create</button>
                </div>
            </Route>
            <Route path="/chats/:chatId">
                <MessageScreen list={chatList} />
            </Route>
        </Switch>
    </>
    )
}

const mapState = state => {
    return {
        chatList: state.chat.chatList
    }
}

const mapDispatch = {
    addChat: chatActions.addChat,
    deleteChat: chatActions.deleteChat
}

export default connect(mapState, mapDispatch)(Chats);