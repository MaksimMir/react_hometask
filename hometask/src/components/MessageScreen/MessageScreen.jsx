import './MessageScreen.scss'

const MessageScreen = ( { message } ) => {

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