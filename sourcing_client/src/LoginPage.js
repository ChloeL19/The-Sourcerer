import './App.css';
import React, { Component } from 'react';
import axios from "axios";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// need to get global app context: https://www.savaslabs.com/blog/using-react-global-state-hooks-and-context

function LoginPage(props) {
    return <p>test2 {props.test}</p>
}
export default LoginPage;


// export default class Instructions extends Component {
//     render() {
//         return(
//             <p>test</p>
//         )
//     }
// }