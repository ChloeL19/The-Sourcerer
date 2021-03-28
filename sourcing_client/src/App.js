import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from "axios";

// next step: construct a header and change how it reads depending on 
// which user logs in

function App() {
 // const [data, setData] = React.useState(null);
 const [username, setUsername] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [user, setUser] = React.useState(null);

  const handleSubmit = async e => {
    e.preventDefault(); // prevents default behavior of component from running
                        // i.e. for a toggle button that would be toggling
    const user_info = {username: username, password: password};
    const response = await axios.post('/login', user_info);
    // set and store the user
    setUser(response.data)
    localStorage.setItem('user', response.data)
    console.log(response.data)
  };

  // if there's a user show the following message
  if (user) {
    return <div>{user.name} just logged in</div>;
  }

  // an alternative way to Axios to connect with APIs
  // React.useEffect(() => {
  //   fetch("/api")
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message));
  // }, []); // passing an empty array only makes this run once

  // otherwise show the login form

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            value={username}
            placeholder="enter a username"
            onChange={({ target }) => setUsername(target.value)}
          />
          <div>
            <label htmlFor="password">password: </label>
            <input
              type="password"
              value={password}
              placeholder="enter a password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
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
