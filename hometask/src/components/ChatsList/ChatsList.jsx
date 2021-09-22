import { Link } from "react-router-dom";


const ChatsList = ({ chat }) => {
    
    return(
    <>
        {chat?.map((el, i) => (
                <Link key={i} to={`/chats/${i}`}>
                <p>
                 {el.name}
                </p>
            </Link>
        ))}
    </>
   )};

export default ChatsList