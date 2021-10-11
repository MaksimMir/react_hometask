import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getMessageFromDB, showWindow, closeDialogWindow, createMessage } from './message.action';
import Dialog from "../Dialog/Dialog";
import './Message.scss';

const dialogMessage = 'Сообщение отправлено';

const Message = () => {
    const { chatId } = useParams()
    const [ text, setText ] = useState('');
    let isVisible = useSelector(state => state.message.isShow)
    const messageDispatch = useDispatch();

    const handleChangeText = evt => {
        setText(evt.target.value);
    }    

    const handleChangeMessage = (evt) => {
        evt.preventDefault(); 
        const newMessage = {
            id: null,
            chats_id: chatId,
            text,
            author: 'Author_My'
        } 
         
        messageDispatch(createMessage(newMessage, chatId));
        
        messageDispatch(showWindow(true));  
        setText('');
    }

    const ref = useRef();

    useEffect(() => {
        ref?.current.focus();
        messageDispatch(getMessageFromDB(chatId));
    });

    useEffect(() => {
        messageDispatch(closeDialogWindow())
    }, [isVisible]);

    return (
        <>
            {isVisible && <Dialog text={dialogMessage} />}
            <form className="form">
                <input
                ref={ref}
                className="form__text"
                onChange={handleChangeText}
                value={text} />
                <label className="form__label">
                </label>

                <button className="form__btn" onClick={handleChangeMessage}>
                    submit
                </button>
            </form>
        </>
    )
        
    
}

export default Message;