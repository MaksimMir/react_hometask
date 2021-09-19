import { List, ListItem } from '@material-ui/core';


const chatLists = [
    {name: 'Bla', id: 6473},
    {name: 'Dla', id: 63473},
    {name: 'Vla', id: 64734443},
    {name: 'Ula', id: 643},
    {name: 'Ola', id: 648685},
]

const Chats = () => {

    return (
        <List>
            {chatLists.map(el => {
                return (
                    <ListItem key={el.id}>
                        {el.name}
                    </ListItem>
                )
            })}
        </List>
    )
}

export default Chats;