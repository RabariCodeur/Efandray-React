import React from 'react';
import ReactDOM from 'react-dom';

//import './index.css';
//import './Css/Login.css'
//import './Css/Acceuil.css'
//import './Css/Message.css'
import reportWebVitals from './reportWebVitals';
import App from './App'
//import Login from './Login';
// import Acceuil from './Acceuil';
// import Message from './Message'
// import Nav from './Nav'


ReactDOM.render(
  <React.StrictMode>
     <App/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
