import React  from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
// import './App.css'
// import './Css/Acceuil.css'
 //import './Css/Login.css'
// import './Css/Message.css'
import Acceuil from "./Acceuil";
import Login from "./Login";
import Message from "./Message";
import{BrowserRouter as Router ,Switch, Route,Link} from 'react-router-dom'
import Recherche from "./Recherche";
import Inscription from "./Inscri"
function App() {
  return (
    <Router>
    <div className="App">
              <Route path="/" exact component={Login}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/accueil" component={Acceuil}/>
              <Route path="/message" component={Message}/>
              <Route path="/recherche" component={Recherche}/>
              <Route path="/inscription" component={Inscription}/>
      </div>
    </Router>
  );
}

export default App;
