import './App.css';
import React, { useContext } from 'react';
import axios from "axios";
import AppContext from './AppContext';

//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Redirect, BrowserRouter } from 'react-router-dom'

// need to get global app context: https://www.savaslabs.com/blog/using-react-global-state-hooks-and-context

function LoginPage({props}) {
    const myContext = useContext(AppContext);

    const handleSubmit = async e => {
        e.preventDefault(); // prevents default behavior of component from running
                            // i.e. for a toggle button that would be toggling
        // if there is no username or password entered, don't go through
        if (myContext.username == "") {
            return (
            // should I throw an alert instead?
            // possible future FIXME
            <BrowserRouter>
                <Redirect to='/login'/>
            </BrowserRouter>
            );
        }
        if (myContext.password == "") {
            return (
            <BrowserRouter>
                <Redirect to='/login'/>
            </BrowserRouter>
            );
        }
        const user_info = {username: myContext.username, password: myContext.password};
        const response = await axios.post('/login', user_info);
        // set and store the user
        myContext.setUser(response.data);
        localStorage.setItem('user', response.data);
        console.log(response.data);
        try {props.history.push("/home")} // why is this sometimes undefined?
        catch (e) {
            console.log(e);
            return (
                <BrowserRouter>
                    <Redirect to='/home'/>
                </BrowserRouter>
            );
        }
      };
    
    // if user is already logged in, redirect to home page
    React.useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser)
        if (loggedInUser) {
        myContext.setUser(loggedInUser);
        }
    }, []);

    return (
        <div>
            <header className="App-header">
            <h1>The Sourcerer</h1>
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
