import { useParams } from 'react-router';
import './MessageScreen.scss'

const MessageScreen = ( { message } ) => {
    const { chatId } = useParams();

    return (
        <ul className="list">
            {message[chatId]?.map(item => {
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