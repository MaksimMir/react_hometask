import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addMessage } from './message.action';
import Dialog from "../Dialog/Dialog";
import { setVisible, inVisible } from "../Dialog/dialog.action";
import './Message.scss';

const Message = () => {
    const { chatId } = useParams()
    const [ text, setText ] = useState('');
    const [ isVisible, setIsVisible] = useState(false);
    const messageDispatch = useDispatch();
    const dialog = useSelector(state => state.dialog);

    const closeDialogWindow = () => {
        messageDispatch(inVisible(false));
    }

    const handleChangeText = evt => {
        setText(evt.target.value);
    }    

    const handleChangeMessage = (evt) => {
        evt.preventDefault();  
        messageDispatch(addMessage(chatId, { text }));   
        messageDispatch(setVisible(true));
        setText('');
    }

    const ref = useRef();

    useEffect(() => {
        ref?.current.focus();
        setIsVisible(dialog);

        return () => {
            setIsVisible(false);
        }
    }, [dialog])

    return (
        <>
            {isVisible && <Dialog closeDialogWindow={closeDialogWindow} />}
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