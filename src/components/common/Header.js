import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-inverse navbg-blue navbar-static-top" style={{margin: "0px", height:"70px"}} >
                     
                        <div className="navbar-header"  >

                            <Link to={"/"} className="navbar-brand apptxt" ><span className="apptxt  blue glyphicon glyphicon-shopping-cart"><span className="afont">eMart</span></span></Link>
                            
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">

                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                        
                            </button>

                      </div>

                        <div className="collapse  navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right" style={{marginRight: "5px"}}>
                                 <li ><Link to={"/Cart"} className="white_txt" style={{fontSize:"14px",color:"white"}}>View My Cart</Link></li> |
                                
                            </ul>
                            
                        </div>

                </nav>   
        </div>
 
        )
    
}


export default Header;






// Header.contextTypes = {
//     //ssrouter: React.PropTypes.object.isRequired
// }