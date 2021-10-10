import { useSelector } from "react-redux";
import { Switch, Route, Link, BrowserRouter, useHistory } from "react-router-dom"
import Chats from './components/Chats/Chats'
import AuthPage from "./components/AuthPage/AuthPage";
import Profile from "./components/Profile/Profile";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const { err } = useSelector(state => state.auth);
  const history = useHistory();
    return (
      <>
      <BrowserRouter history={history}>
        <ul className="nav">
            <li className="nav__item"><Link to="/">Home</Link></li>
            <li className="nav__item"><Link to="/auth">AuthPage</Link></li>
            <li className="nav__item"><Link to="/chats">Chats</Link></li>
            <li className="nav__item"><Link to="/profile">Profile</Link></li>
        </ul>
        <Switch>
          {!err && 
            <Route exact path="/">
              <h1>Home</h1>
              <TodoList />
            </Route>
          }
          <Route path="/auth">
            <AuthPage />
          </Route>
          {!err &&            
            <Route path="/chats">
              <Chats />
            </Route>
          }
          {!err && 
            <Route path="/profile" component={Profile} />
          }          
          <Route path="/*">
            <p>Необходимо зарегестрироваться, или войти под своим логином</p>
          </Route>
        </Switch>
      </BrowserRouter>
      </>
    );
}

export default App;
