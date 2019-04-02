import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

axios.defaults.headers.put["Content-Type"] = "application/json"

if (process.env.NODE_ENV === 'development') {
    const username = process.env.REACT_APP_USER
    const password = process.env.REACT_APP_PASSWORD
    axios.defaults.auth = {
        username,
        password
    }
} else {
    axios.defaults.headers["X-userToken"] = window.servicenowUserToken
}

ReactDOM.render(<App />, document.getElementById('root'))
