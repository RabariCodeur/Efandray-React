import Nav from './Nav'
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import './Css/Acceuil.css'
import avatar from './assets/avatar2.png'
import cinqueterre from './assets/cinqueterre.jpg'
import manAvatar from './assets/default-man.png'

        function Acceuil(){
               return(
                       
                   <div className="container-fluid" id="Acc">
                           <Nav/>
                           <div className="row">
                                 <div className="col-md-3">
                                        <div className="card">
                                                
                                                    <div className="card-header">
                                                         <h4>Profil</h4>
                                                         <img src={avatar} alt="avatar" className="avatar"/>
                                                    </div>
        
                                                    <div className="card-body">
                                                          
                                                          <p>Designer, UI</p>  
                                                          <p>London, UK</p> 
                                                          <p>April 1, 1988</p> 
                                                   </div>
                                        </div>
        
                                       <div className="container send">
                                              <h4>Message</h4>
                                                 <div className="table-responsive-md">
                                                      <table className="table">
                                                              <tr>
                                                                  <td> <img src={avatar} alt="avatar" className="avatarMessage"/></td>
                                                                  <td>Bonjour Mr Hitler ...</td>    
                                                              </tr>
                                                              <tr>
                                                                  <td> <img src={avatar} alt="avatar" className="avatarMessage"/></td>
                                                                  <td>Aiza le mofo Mr Fidimalala</td>    
                                                              </tr>
                                                              <tr>
                                                                  <td> <img src={avatar} alt="avatar" className="avatarMessage"/></td>
                                                                  <td>Bonjour Mr Hitler ...</td>    
                                                              </tr>
                                                       </table>
                                                    
                                                 </div>
                                      </div>
        
                                </div>
                                  
                                <div className="col-md-6 post">
                                        <div className="media border p-3">
                                                <div className="media-body">
                                                        <textarea placeholder="Status"></textarea>
                                                        <button className="btn btn-success">Post</button>
                                                </div>
                                        </div> 
                                        
                                        <div className="media border p-3">
                                               <div className="media-body">
                                                     <div className="card">
                                                              <div className="card-header">
                                                                    <img src={avatar} alt="avatar" className="avatar2"/>
                                                              </div>
                                                              <div className="card-body">
                                                                      <p>
                                                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    
                                                                      </p>
                                                              </div>
                                                                <div className="card-footer">
                                                                   
                                                                        <img src={cinqueterre} alt="ocean" className="ocean" width="300"/> 
                                                                        <i className=" fa fa-thumbs-o-up"></i>
                                                                </div>
                                                     </div>
                                                </div>
                                        </div> 
                                       
                                </div>
                                 
                                <div className="col-md-3">
                                       <div className="container">
                                               <h4>Statut en ligne</h4>
                                               <div className="row">
                                                  <div className="col-md-4 divstatus">
                                                           <img src={manAvatar} alt="ocean" className="manAvatar" width="300"/> 
                                                           <div className="statusOnline"></div>
                                                  </div>
                                                  <div className="col-md-5 paragrapheList">
                                                        <p>Fitiavana Rabarimahefa</p>
                                                 </div>
                                               </div>
        
                                               <div className="row">
                                                  <div className="col-md-4 divstatus" >
                                                           <img src={manAvatar} alt="ocean" className="manAvatar" width="300"/> 
                                                           <div className="statusOnline"></div>
                                                  </div>
                                                  <div className="col-md-8 paragrapheList">
                                                        <p>Tolojanahary Fanomezantsoa</p>
                                                 </div>
                                               </div>
        
        
                                               <div className="row">
                                                  <div className="col-md-4 divstatus">
                                                           <img src={manAvatar} alt="ocean" className="manAvatar" width="300"/> 
                                                           <div className="statusOnline"></div>
                                                  </div>
                                                  <div className="col-md-8 paragrapheList">
                                                        <p>Ismael Fidimalala</p>
                                                 </div>
                                               </div>
                                       </div>


                                       <div className="container suggestion">
                                                 <h4>Suggestions d'amis</h4>
                                             <div className="table-responsive-md">
                                                    <table>
                                                            <tr>
                                                                    <td id="avatar"><img src={avatar} alt="ocean" className="userplus"/> </td>
                                                                    <td id="nom">Tolojanahary Fanomezantsoa</td>
                                                                    <td id="userplus"><i className ="	fa fa-user-plus"></i></td>
                                                            </tr>

                                                            <tr>
                                                                    <td id="avatar"><img src={avatar} alt="ocean" className="userplus"/> </td>
                                                                    <td id="nom"> Ismael Fidimalala</td>
                                                                    <td id="userplus"><i className ="	fa fa-user-plus"></i></td>
                                                            </tr>

                                                            <tr>
                                                                    <td id="avatar"><img src={avatar} alt="ocean" className="userplus"/> </td>
                                                                    <td id="nom"> Adolph Hitler</td>
                                                                    <td id="userplus"><i className ="	fa fa-user-plus"></i></td>
                                                            </tr>

                                                            <tr>
                                                                    <td id="avatar"><img src={avatar} alt="ocean" className="userplus"/> </td>
                                                                    <td id="nom"> Anjara Herman</td>
                                                                    <td id="userplus"><i className ="	fa fa-user-plus"></i></td>
                                                            </tr>
                                                    </table>
                                            </div>   
                                                
                                       </div>
                                </div>
        
                           </div>   
                           <footer>
                                   
                                        <div className="row">
                                                <div className="col-md-4 itemfooter">
                                                     <ul>
                                                        <li>A propos</li>
                                                        <li>Contact</li>
                                                        <li>Suggestion</li>
                                                    </ul>   
                        
                                                </div>

                                                <div className="col-md-4 itemfooter">
                                                        <ul>
                                                                <li><i className="fa fa-facebook icon"></i></li>
                                                                <li><i className="fa fa-twitter icon"></i></li>
                                                                <li><i className="fa fa-instagram icon"></i></li>
                                                        </ul>
                                                      
                                                </div>

                                                <div className="col-md-4 itemfooter">
                                                <ul>
                                                        <li>Nom : Rabarimahefa Ny Aina Fitiavana</li>
                                                        <li>Numero : 82 (IGGLIA3)</li>
                                                        <li>Email : rabarimahefa.fitiavana@gmail.com</li>
                                                    </ul>   
                                                </div>
                                        </div>
                                   
                           </footer>
                   </div>
        
                   
        
                   
               )
        
        }export default (Acceuil);
   