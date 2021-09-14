import './MessageScreen.scss';

const MessageScreen = ({ messageList }) => {

    return (
        <ul className="list">
            {messageList.map(item => {
            return (
                <li key={item.id} className="list__item">
                    <p className="list__name">{ item.name }</p>
                    <p className="list__text">{ item.text }</p>
                </li>
            )
            })}
        </ul>
    );


}

export default MessageScreen;