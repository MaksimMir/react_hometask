import { Link } from "react-router-dom";
import './ChatList.scss';


const ChatsList = ({ chat, closeChat }) => {  
    const deleteChat = id => {
        closeChat(id);
    }
    return(
    <nav className="chatlist">
        {chat?.map(el => (
            <Link className="chatlist__item" key={el.id} to={`/chats/${el.id}`}>
                 {el.name}
                 <button onClick={() => deleteChat(el.id)} className="chatlist__closebtn">&#128473;</button>
            </Link>
        ))}
    </nav>
   )};

export default ChatsList