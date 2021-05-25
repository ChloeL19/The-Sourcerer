import './App.css';
import React, { useContext } from 'react';
import axios from "axios";
import AppContext from './AppContext';

import { BrowserRouter, Redirect } from 'react-router-dom'

function Home({props}) {
    const myContext = useContext(AppContext);

    console.log("Hi I'm in the Home component")
    // some ideas for redirecting when necessary: https://dev.to/projectescape/programmatic-navigation-in-react-3p1l#:~:text=import%20%7B%20Redirect%20%7D%20from%20%22react,the%20state%20of%20the%20component.&text=Whenever%20you%20want%20to%20redirect,rendering%20the%20component.

    // maybe set user to null state instead
    // if user is null, redirect to login page (or ask user to log in)
    const handleLogout = () => {
        myContext.setUsername("");
        myContext.setPassword("");
        myContext.setUser(null);
        localStorage.clear();
        try {props.history.push("/login")} // why is this sometimes undefined?
        catch (e) {
            console.log(e);
            return (
                <BrowserRouter>
                    <Redirect to='/login'/>
                </BrowserRouter>
            );
        }
      };

    console.log("The user in Home:")
    console.log(myContext.user)
    if (myContext.user == null) {
        return (
            <BrowserRouter>
                <Redirect to='/login'/>
            </BrowserRouter>
        );
    }

    return (
        <div>
            <div>{myContext.user.name} just logged in</div>
            <button onClick={handleLogout}>logout</button>
        </div>
    )

}

export default Home;