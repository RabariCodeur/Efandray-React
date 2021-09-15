import "bootstrap/dist/css/bootstrap.min.css"
import './Css/Login.css'
import {Link} from 'react-router-dom'

function Login(){
    return(
      
        <div className="container " id="login">
              <div className="row">
            
                <div className ="col-md-6 photo">
                    <div className="row">
                          
                    </div>
                </div>
            <div className="col-md-4">

            <div className="card">
                  <div className="card-header"><h4>Login</h4></div>
                       <div className="card-body">
                          <form className="form-group">
                             <input type="text" className="form-control" placeholder=" Votre adresse email"/><br/>
                             <input type="password" className="form-control" placeholder=" Votre mot de passe"/><br/>
                           <Link to="/accueil"><button className="btn btn-success">S'authentifier</button><br/></Link> 
                           <Link to="/inscription"><button className="btn btn btn-primary">S'inscrire</button></Link> 
                          </form>
                        </div>
                  <div className="card-footer"><h4>E-FANDRAY</h4></div>
               </div>
              
          </div>
        </div>
   </div>

  
   
    )
}export default (Login);