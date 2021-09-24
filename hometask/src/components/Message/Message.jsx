import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addMessage } from './message.action';
import './Message.scss';

const Message = () => {
    const { chatId } = useParams()
    const [ text, setText ] = useState('');

    const messageDispatch = useDispatch()

    const handleChangeText = evt => {
        setText(evt.target.value);
    }    

    const handleChangeMessage = (evt) => {
        evt.preventDefault();  
        const message = { text };
        messageDispatch(addMessage(chatId, message));
        setText('');
    }

    const ref = useRef();

    useEffect(() => {
        ref?.current.focus();
    })

    return (
        <>
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