import { useState, useEffect } from "react";
import Dialog from "./components/Dialog/Dialog";
import Message from "./components/Message/Message";
import MessageScreen from "./components/MessageScreen/MessageScreen";


const App = () => {
    const [ messageList, setMessageList ] = useState([])
    const [ isVisible, setIsVisible] = useState(false);
    const [ messageName, setMessageName ] = useState('')


    const changeList = (text, name) => {

      const newMessage = {
        name: name,
        text: text,
        id: Math.random()
      }
      
      setMessageList([...messageList, newMessage])
      
    }

    const closeDialogWindow = () => {
      setIsVisible(false)
    }

    useEffect(() => {
      if (!messageList.length) return;
       
      setMessageName(messageList[messageList.length - 1].name)

      setTimeout(() => {
        setIsVisible(true)
      }, 1500)

      return () => {
        setIsVisible(false)        
      }
    }, [messageList])

    return (
      <>
        <Message changeList={changeList} />
        {isVisible && <Dialog name={messageName} closeDialogWindow={closeDialogWindow} />}
        <MessageScreen messageList={messageList} />
      </>
    );
}

export default App;
