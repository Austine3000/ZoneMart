import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/loginActions';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {

    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        
        const { isAuthenticated } = this.props.auth;

        const userLinks = (
            <ul className="nav navbar-nav navbar-right" style={{marginRight: "5px"}}>
                <li><Link to={"/Cart"} className="white_txt" style={{fontSize:"14px"}}><span className="glyphicon glyphicon-shopping-cart"></span> Cart<span className="badge">{this.props.products}</span></Link></li>
                <li><a href="#" style={{fontSize:"14px"}} onClick={this.logout.bind(this)}>Logout</a></li>
            </ul>
        );

        const guestLinks = (
            <ul className="nav navbar-nav navbar-right" style={{marginRight: "5px"}}>
                <li><Link to={"/Cart"} className="white_txt" style={{fontSize:"14px"}}><span className="glyphicon glyphicon-shopping-cart"></span> Cart<span className="badge">{this.props.products}</span></Link></li>
                <li ><Link to={"/SignUp"} className="white_txt" style={{fontSize:"14px"}}  ><span className="glyphicon glyphicon-user "></span> Sign Up</Link></li>
                <li><Link style={{fontSize:"14px"}} to={"/Login"} className="white_txt"  ><span className="glyphicon glyphicon-log-in"></span> Sign In</Link></li>
            </ul>
        );
        return (
            <div>
                <nav className="navbar navbar-inverse navbg-blue navbar-static-top" style={{margin: "0px"}} >     
                    <div className="navbar-header"  >
                        <Link to={"/"} className="navbar-brand apptxt" ><span className="apptxt  blue glyphicon glyphicon-shopping-cart"><span className="afont">ZoneMart</span></span></Link>
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                                    
                        </button>

                    </div>

                    <div className="collapse  navbar-collapse" id="myNavbar"> 
                        { isAuthenticated ? userLinks : guestLinks }
                    </div>
                </nav>
            </div>
 
        )
    }
}

Header.propTypes = {
    auth: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(Header);
