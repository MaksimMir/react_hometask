import { Link } from "react-router-dom";


const ChatsList = ({ chat }) => {

    return(
    <>
        {Object.keys(chat).map((id, i) => (
            <Link key={i} to={`/chats/${id}`}>
                <p>
                 {chat[id].name}
                </p>
            </Link>
        ))}
    </>
   )};

export default ChatsList