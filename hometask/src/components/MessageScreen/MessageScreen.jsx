import './MessageScreen.scss';
import { useSelector } from 'react-redux';

const MessageScreen = () => {

    const message = useSelector(state => state.message.messageList);

    return (
        <ul className="list">
            {message?.map(item => {
            return (
                <li className="list__item" key={item.id}>
                    { item.text }
                </li>
            )
            })}
        </ul>
    );
}

export default MessageScreen;