import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteChat } from "../Chats/chat.action";
import './ChatList.scss';


const ChatsList = () => { 
    const chat = useSelector(state => state.chat);
    const dispatch = useDispatch();

    const closeChat = id => {
        dispatch(deleteChat(id));
    }
    return(
    <nav className="chatlist">
        {chat?.map(el => (
            <Link className="chatlist__item" key={el.id} to={`/chats/${el.id}`}>
                 {el.name}
                 <button onClick={() => closeChat(el.id)} className="chatlist__closebtn">&#128473;</button>
            </Link>
        ))}
    </nav>
   )};

export default ChatsList