import { useState, useEffect } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom"
import Dialog from "./components/Dialog/Dialog";
import Message from "./components/Message/Message";
import Chats from './components/Chats/Chats'



const App = () => {
    const [ isVisible, setIsVisible] = useState(false);
    const [ messageList, setMessageList ] = useState([])

    const changeList = (text) => {

        const newMessage = {
          text: text,
          id: Math.random()
        }
        
        setMessageList((prevState) => [...prevState, newMessage])
        
    }

    const closeDialogWindow = () => {
      setIsVisible(false)
    }

    useEffect(() => {

      if (!messageList.length) return;

      setTimeout(() => {
        setIsVisible(true)
      }, 1500)

      return () => {
        setIsVisible(false)        
      }
    }, [messageList])

    return (
      <>
      <BrowserRouter>
        <ul className="nav">
            <li className="nav__item"><Link to="/">Home</Link></li>
            <li className="nav__item"><Link to="/chats">Chats</Link></li>
            <li className="nav__item"><Link to="/profile">Profile</Link></li>
        </ul>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/chats">
            <Message changeList={changeList} />
            {isVisible && <Dialog closeDialogWindow={closeDialogWindow} />}
            <div className="chats">
              <Chats />
            </div>
          </Route>
          <Route path="/profile">
            <h1>Profile</h1>
          </Route>
          <Route path="/*">
            <p>Page not found</p>
          </Route>
        </Switch>
      </BrowserRouter>
      </>
    );
}

export default App;
