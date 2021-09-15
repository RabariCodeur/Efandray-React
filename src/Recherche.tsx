import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import './Css/Recherche.css'
import avatar from './assets/avatar2.png'
function Recherche(){
    return(
       <div className="container-fluid" id="search">
              <div className="row">
                   <div className="col-md-3 vertical-List">
                          <div className="List">
                              <img src={avatar} alt="avatar"/>
                              <p>Rabarimahefa</p>
                              <i className="fa fa-user-plus"></i>
                          </div>

                          <div className="List">
                              <img src={avatar} alt="avatar"/>
                              <p>Ary Fenitre</p>
                              <i className="fa fa-user-plus"></i>
                          </div>

                          <div className="List">
                              <img src={avatar} alt="avatar"/>
                              <p>Anjara Herman</p>
                              <i className="fa fa-user-plus"></i>
                          </div>

                          <div className="List">
                              <img src={avatar} alt="avatar"/>
                              <p>Ismael Fidimalala</p>
                              <i className="fa fa-user-plus"></i>
                          </div>

                          <div className="List">
                              <img src={avatar} alt="avatar"/>
                              <p>Toloja Fenomanantsoa</p>
                              <i className="fa fa-user-plus"></i>
                          </div>

                          <div className="List">
                              <img src={avatar} alt="avatar"/>
                              <p>Tanjona Tsihoarana</p>
                              <i className="fa fa-user-plus"></i>
                          </div>

                          <div className="List">
                              <img src={avatar} alt="avatar"/>
                              <p>Princi Rilan</p>
                              <i className="fa fa-user-plus"></i>
                          </div>

                          <div className="List">
                              <img src={avatar} alt="avatar"/>
                              <p>Adolph Hitler</p>
                              <i className="fa fa-user-plus"></i>
                          </div>

                          <div className="List">
                              <img src={avatar} alt="avatar"/>
                              <p>Jerry Alex</p>
                              <i className="fa fa-user-plus"></i>
                          </div>

                          <div className="List">
                              <img src={avatar} alt="avatar"/>
                              <p>Mosesy Rindra</p>
                              <i className="fa fa-user-plus"></i>
                          </div>

                   </div>

                   <div className="col-md-8 Formulaire-Recherche">
                            <div className="container">
                                    <div className="card">
                                                <div className="card-header">Rechercher Votre amis</div>
                                                <div className="card-body">
                                                    <form className="form-group">
                                                         <input type="text" name="nom"/>
                                                         <button className="btn btn-success">Recherche</button>
                                                    </form>
                                                </div>
                                                <div className="card-footer">E-FANDRAY</div>
                                    </div>
                            </div>
                   </div>

              </div>
       </div>
    );
}
export default Recherche;