import "bootstrap/dist/css/bootstrap.min.css"
import './Css/Inscri.css'
import {Link} from 'react-router-dom'
function Inscri(){
    return(
        <div className="container " id="inscri">
        <div className="row">
      
          <div className ="col-md-6 photo">
              <div className="row">
                    
              </div>
          </div>
      <div className="col-md-4">

      <div className="card">
            <div className="card-header"><h4>Inscription</h4></div>
                 <div className="card-body">
                    <form className="form-group">
                       <input type="text" className="form-control" placeholder=" Votre adresse email"/><br/>
                       <input type="password" className="form-control" placeholder=" Votre mot de passe"/><br/>
                       <Link to="/login"><button className="btn btn btn-primary">S'inscrire</button></Link>
                    </form>
                  </div>
            <div className="card-footer"><h4>E-FANDRAY</h4></div>
         </div>
        
    </div>
  </div>
</div>

    )
}
export default Inscri;