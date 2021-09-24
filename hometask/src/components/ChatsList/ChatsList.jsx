import { Link } from "react-router-dom";
import './ChatList.scss';


const ChatsList = ({ chat }) => {    
    return(
    <nav className="chatlist">
        {chat?.map((el, i) => (
            <Link className="chatlist__item" key={i} to={`/chats/${i}`}>
                 {el.name}
            </Link>
        ))}
    </nav>
   )};

export default ChatsList