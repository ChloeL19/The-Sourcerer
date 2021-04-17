import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from "axios";
import LoginPage from './LoginPage'
import AppContext from './AppContext';
import Home from './Home'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


// next half-step: get this thing working with routes
  // to access global state from components, use useContext. https://medium.com/fullstacked/create-a-global-state-with-react-context-564524fc3b6c#:~:text=To%20access%20the%20global%20state,state%20with%20the%20function%20setState.
// next step: construct a header and change how it reads depending on 
// which user logs in

// global app variables
  // username
  // password
  // user
// components to construct
  // login page
  // home page

function App() {
 // const [data, setData] = React.useState(null);
 const [username, setUsername] = React.useState("heyo");
 const [password, setPassword] = React.useState("");
 const [user, setUser] = React.useState(null);
 const [test, setTest] = React.useState("Really a test");

 const userSettings = {
   username: username,
   password: password,
   user: user,
   setUsername,
   setPassword,
   setUser,
 };

  // const handleSubmit = async e => {
  //   e.preventDefault(); // prevents default behavior of component from running
  //                       // i.e. for a toggle button that would be toggling
  //   const user_info = {username: username, password: password};
  //   const response = await axios.post('/login', user_info);
  //   // set and store the user
  //   setUser(response.data);
  //   localStorage.setItem('user', response.data);
  //   console.log(response.data);
  // };

  // const handleLogout = () => {
  //   setUsername("");
  //   setPassword("");
  //   setUser({});
  //   localStorage.clear();
  // };

  // check if user is already logged in
  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser)
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);


  // if there's a user show the following message
  if (user) {
    return (
      // <div>
      //   <div>{user.name} just logged in</div>
      //   <button onClick={handleLogout}>logout</button>
      // </div>
      <AppContext.Provider value={userSettings}>
        <Home user={user}/>
      </AppContext.Provider>
    );
  }

  // an alternative way from Axios to connect with APIs
  // React.useEffect(() => {
  //   fetch("/api")
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message));
  // }, []); // passing an empty array only makes this run once

  // otherwise show the login form

  return (
    <AppContext.Provider value={userSettings}>
      <div className="App">
        <LoginPage />
      </div>
    </AppContext.Provider>
  )

  // other return statements; kept around for educational purposes

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //        <img src={logo} className="App-logo" alt="logo" />
  //        <p>{!data ? "Loading:..." : data}</p>
  //     </header>
  //   </div>
  // );


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;




// {/* <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h1>The Sourcerer</h1>
//           <LoginPage test={test} />
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="username">Username: </label>
//             <input
//               type="text"
//               value={username}
//               placeholder="enter a username"
//               onChange={({ target }) => setUsername(target.value)}
//             />
//             <div>
//               <label htmlFor="password">password: </label>
//               <input
//                 type="password"
//                 value={password}
//                 placeholder="enter a password"
//                 onChange={({ target }) => setPassword(target.value)}
//               />
//             </div>
//             <button type="submit">Login</button>
//           </form>
//         </header> */}
