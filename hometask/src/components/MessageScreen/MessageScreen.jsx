import './MessageScreen.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



const MessageScreen = ( { chatMessage } ) => {
    const [ message, setMessage ] = useState([]);
    const { chatId } = useParams();
    useEffect(() => {
        const mess = chatMessage.map(item => {return item.messages})
        setMessage(mess)

    }, [chatMessage])

    return (
        <ul className="list">
            {message[chatId]?.map((item, id) => {
            return (
                <li className="list__item" key={id}>
                    <p className="list__text">{ item.text }</p>
                </li>
            )
            })}
        </ul>
    );


}

export default MessageScreen;