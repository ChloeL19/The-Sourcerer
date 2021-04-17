import './App.css';
import React, { useContext } from 'react';
import axios from "axios";
import AppContext from './AppContext';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function Home(props) {
    const myContext = useContext(AppContext);

    const handleLogout = () => {
        myContext.setUsername("");
        myContext.setPassword("");
        myContext.setUser({});
        localStorage.clear();
      };

    return (
        <div>
            {/* <div>{myContext.user.name} just logged in</div> */}
            <div>{myContext.user.name} just logged in</div>
            <button onClick={handleLogout}>logout</button>
        </div>
    )

}

export default Home;