import './App.css';
import React, { useContext } from 'react';
import axios from "axios";
import AppContext from './AppContext';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// need to get global app context: https://www.savaslabs.com/blog/using-react-global-state-hooks-and-context

function LoginPage(props) {
    const myContext = useContext(AppContext);

    const handleSubmit = async e => {
        e.preventDefault(); // prevents default behavior of component from running
                            // i.e. for a toggle button that would be toggling
        const user_info = {username: myContext.username, password: myContext.password};
        const response = await axios.post('/login', user_info);
        // set and store the user
        myContext.setUser(response.data);
        localStorage.setItem('user', response.data);
        console.log(response.data);
      };
    

    // // check if user is already logged in
    // React.useEffect(() => {
    //     const loggedInUser = localStorage.getItem("user");
    //     console.log(loggedInUser)
    //     if (loggedInUser) {
    //     myContext.setUser(loggedInUser);
    //     }
    // }, []);

    // if user is already logged in, redirect to home page

    return (
        <div>
            <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1>The Sourcerer</h1>
            {/* <LoginPage test={test} /> */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                type="text"
                value={myContext.username}
                placeholder="enter a username"
                onChange={({ target }) => myContext.setUsername(target.value)}
                />
                <div>
                <label htmlFor="password">password: </label>
                <input
                    type="password"
                    value={myContext.password}
                    placeholder="enter a password"
                    onChange={({ target }) => myContext.setPassword(target.value)}
                />
                </div>
                <button type="submit">Login</button>
            </form>
            </header>
        </div>
    )
}
export default LoginPage;


// export default class Instructions extends Component {
//     render() {
//         return(
//             <p>test</p>
//         )
//     }
// }