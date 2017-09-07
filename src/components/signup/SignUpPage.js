import React from 'react';
import {Link} from "react-router";
import SignUpForm from "./SignUpForm";
import {connect} from "react-redux";
import {userSignUpRequest} from "../../actions/signUpAction";


class SignUpPage extends React.Component{


    render(){
            const {userSignUpRequest} = this.props;
            
        return(
            <div className="signbody">
                <SignUpForm userSignUpRequest = {userSignUpRequest}/>
            </div>   
        )
    }
}


export default connect(null,{userSignUpRequest})(SignUpPage);