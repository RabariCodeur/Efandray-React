import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import './Css/Message.css'
function Message(){
   return   (
        <div className="container" id="Mess">
            
                 <div className="card">
                                <div className="card-header">
                                      <input type="text" placeholder="Nom du destinataire"></input>
                                </div>
                                <div className="card-body"></div>
                                <div className="card-footer">
                                      <div className="row">
                                            <div className="col-md-10">
                                                  <textarea></textarea>
                                            </div>
                                            <div className="col-md-2">
                                                 <i className="fa fa-paper-plane"></i>
                                            </div>
                                      </div>
                                </div>
                </div> 
        </div>
      )
}export default (Message);