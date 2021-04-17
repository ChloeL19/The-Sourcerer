import './App.css';
import React, { useContext } from 'react';
import axios from "axios";
import AppContext from './AppContext';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function Home(props) {
    const myContext = useContext(AppContext);


    // some ideas for redirecting when necessary: https://dev.to/projectescape/programmatic-navigation-in-react-3p1l#:~:text=import%20%7B%20Redirect%20%7D%20from%20%22react,the%20state%20of%20the%20component.&text=Whenever%20you%20want%20to%20redirect,rendering%20the%20component.

    const handleLogout = () => {
        myContext.setUsername("");
        myContext.setPassword("");
        myContext.setUser({});
        localStorage.clear();
      };

    // if user is null, redirect to login page

    return (
        <div>
            {/* <div>{myContext.user.name} just logged in</div> */}
            <div>{myContext.user.name} just logged in</div>
            <button onClick={handleLogout}>logout</button>
        </div>
    )

}

export default Home;