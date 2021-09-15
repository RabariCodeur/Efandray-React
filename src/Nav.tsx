import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import './Css/Nav.css'
import {Link} from 'react-router-dom'
function Nav (){
    return (
        <div className="container-fluid" id="Nav">
                    <ul className="nav justify-content-center">
                       <li className="nav-item">
                         <Link to="/recherche"> <a className="nav-link" href="#">Recherche d'amis</a></Link>
                        </li>

                    <li className="nav-item">
                    <Link to="/message"><a className="nav-link" href="#">Envoye message</a></Link>
                    </li>

                </ul>
      </div>
    );
}
export default Nav;