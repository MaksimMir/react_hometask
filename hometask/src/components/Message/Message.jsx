import { useState } from 'react';
import './Message.scss';

const Message = ({changeList}) => {
    const [ text, setText ] = useState('');
    const [ name, setName ] = useState('')

    const handleChangeText = evt => {
        setText(evt.target.value);
    }    

    const handleChangeName = evt => {
        setName(evt.target.value)
    }

    const handleChangeMessage = (evt) => {
        evt.preventDefault();
        changeList(text, name);
        setText('');
        setName('');
    }

    return (
        <form className="form">
            <label className="form__label" htmlFor="mess">Message</label>
                <input type="text" 
                onChange={handleChangeText}
                value={text}  
                className="form__text"
                id="mess" />

            <label className="form__label" htmlFor="name">UserName</label>
                <input type="text" 
                onChange={handleChangeName}
                value={name}  
                className="form__text"
                id="name" />

            <button onClick={handleChangeMessage} className="form__btn">submit</button>
        </form>
    )
        
    
}

export default Message;