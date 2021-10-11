import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { fetchUser } from "./auth.action";

const AuthPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorFlag, setErrorFlag] = useState(false);
    const history = useHistory();
    const { err } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handlePassChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setEmail('');
      setPassword('');
      setErrorFlag(false);
      dispatch(fetchUser({ email, password }));
      history.push('/chats');
    };

    useEffect(() => {
      if(err) {
        setErrorFlag(prevState => !prevState)
      }
    }, [err])
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Email"
              name="email"
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              name="password"
              onChange={handlePassChange}
              value={password}
              type="password"
              />
            </div>
            <div>
              {errorFlag && <p>{err}</p>}
              <button type="submit">Login</button>
            </div>
            <hr />
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </form>
        </div>
      );
    }

export default AuthPage;