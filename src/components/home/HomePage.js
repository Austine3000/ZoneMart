import React from 'react';
import {Link} from "react-router";
import { connect } from 'react-redux';
import { logout } from '../../actions/loginActions';

class HomePage extends React.Component{
    logout(e) {
        e.preventDefault();
        this.props.logout();
    } 

    render() {
        const { isAuthenticated } = this.props.auth;

        const userLinks = (
            <ul className="nav navbar-nav navbar-right" style={{marginRight: "5px"}}>
                <li><a href="#" style={{fontSize:"14px"}} onClick={this.logout.bind(this)}>Logout</a></li>
            </ul>
        );

        const guestLinks = (
            <ul className="nav navbar-nav navbar-right" style={{marginRight: "5px"}}>
                <li ><Link to={"/SignUp"} className="white_txt" style={{fontSize:"14px"}}  ><span className="glyphicon glyphicon-user "></span> Sign Up</Link></li>
                <li><Link style={{fontSize:"14px"}} to={"/Login"} className="white_txt"  ><span className="glyphicon glyphicon-log-in"></span> Sign In</Link></li>
            </ul>
        );

		return(
            <div >
                    
                
        
            </div>
			)



	}


}

HomePage.propTypes = {
    auth: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, { logout })(HomePage);







