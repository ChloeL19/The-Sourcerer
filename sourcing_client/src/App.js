import './App.css';
import React from 'react';
import LoginPage from './LoginPage'
import AppContext from './AppContext';
import Home from './Home'

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'


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

  // check if user is already logged in
  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser)
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  console.log("THe user in App.js: ")
  console.log(user)
  console.log(user == 'true')

  // if there's a user show the following message
  // change /Home to just exact path /
  if (user) {
    return (
      <AppContext.Provider value={userSettings}>
        <BrowserRouter>
          <Switch>
            <Route path='/home'> 
              <Home user={user}/>
            </Route>
            <Route path='/login'>
              <LoginPage />
            </Route>
          </Switch>
          <Redirect to='/home'/>
        </BrowserRouter>
      </AppContext.Provider>
    );
  }

  // otherwise show the login form

  // declare routes like this instead: https://www.codingame.com/playgrounds/6517/react-router-tutorial
  // probably in both return statements
  // honestly I can probably do all of the redirecting within the sub components
  // later figure out how to direct people away from certain pages if they have not yet logged in

  return (
    <AppContext.Provider value={userSettings}>
      <BrowserRouter>
        <div className="App"> 
          <Switch>
            <Route path='/home'> 
              <Home user={user}/>
            </Route>
            <Route path='/login'>
              <LoginPage />
            </Route>
          </Switch>
        </div>
        <Redirect to='/login'/>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;

