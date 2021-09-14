import { List, ListItem } from '@material-ui/core';
import './MessageScreen.scss'


const MessageScreen = ({ messageList }) => {

    return (
        <List className="list">
            {messageList.map(item => {
            return (
                <ListItem className="list__item" key={item.id}>
                    <p className="list__name">{ item.name }</p>
                    <p className="list__text">{ item.text }</p>
                </ListItem>
            )
            })}
        </List>
    );


}

export default MessageScreen;