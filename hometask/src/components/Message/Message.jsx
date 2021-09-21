import { useState, useEffect, useRef } from 'react';
import './Message.scss';

const Message = ({changeList}) => {
    const [ text, setText ] = useState('');

    const handleChangeText = evt => {
        setText(evt.target.value);
    }    

    const handleChangeMessage = (evt) => {
        evt.preventDefault();  
        changeList(text);
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