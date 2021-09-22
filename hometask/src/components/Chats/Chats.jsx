import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ChatsList from "../ChatsList/ChatsList";
import MessageScreen from "../MessageScreen/MessageScreen";



const chatLists = [
    {
        name: "Chat1",
        messages: [{ text: "FirstMessage", author: 'AUTHORS.BOT', id: 1 }],
    },
    {
        name: "Chat2",
        messages: [
            { text: "FirstMessageHereToo!", author: 'AUTHORS.ME', id: 1 },
            { text: "TwoMessageHereToo!", author: 'AUTHORS.ME', id: 2 }
        ],
    },
]

const Chats = () => {
    const [ chat, setChat ] = useState(chatLists);

    return (
        <>
        <ul>
            <ChatsList chat={chat} />
        </ul>

        <Switch>
            <Route exact path="/chats">
                <p>Select a chat please</p>
            </Route>
            <Route path="/chats/:chatId">
                <MessageScreen chatMessage={chat} />
            </Route>
        </Switch>
    </>
    )
}

export default Chats;