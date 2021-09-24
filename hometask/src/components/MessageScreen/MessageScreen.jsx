import './MessageScreen.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



const MessageScreen = ( { list } ) => {
    const [ chat, setChat ] = useState([])
    const { chatId } = useParams();
    
    useEffect(() => {
        const mess = list.map(item => {return item.messages})
        setChat(mess)
    }, [list])

    return (
        <ul className="list">
            {chat[chatId]?.map((item, id) => {
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