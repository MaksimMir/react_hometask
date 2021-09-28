import { Switch, Route, Link, BrowserRouter } from "react-router-dom"
import Chats from './components/Chats/Chats'
import Profile from "./components/Profile/Profile";



const App = () => {
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
            <Chats />
          </Route>
          <Route path="/profile">
            <Profile/>
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
