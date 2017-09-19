import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import validateInput from './LoginValidation';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            const { username, password } = this.state;
            this.setState({ errors: {}, isLoading: true });
            this.props.login({username, password}).then(
                (res) => {this.context.router.push('/CreateTemplate');
                //console.log(res);
            },                                 
                (err) => this.setState({ errors: "Invalid user details", isLoading: false })
            );
        }
        
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if(!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        let links= {
            fontSize: "24px",
            textDecoration:"none",
            color: "#000000"
        };

        const { errors, username, password, isLoading } = this.state;

        return (         
            <div className="MainContentStyle">
                <div className="signbody">
                    <div className="col-xs-8 col-xs-offset-2 col-md-4 well centralised col-md-offset-4 div-round">
                        <span>SIGN IN</span>
                        <hr style={{ borderColor : "#978b88" }}/>
                        <p className="text-center"><Link to={"/"} style={links}><span className="blue glyphicon glyphicon-shopping-cart"></span>  ZoneMart</Link></p>        		
                        <form onSubmit={this.onSubmit}>
          			        <div className={classnames("form-group", { 'has-error': errors.username })}>
            			        <label>Username:</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-user"></span>
                                    </div>
                                    <input value={this.state.username} onChange={this.onChange} type="text" className="form-control" name="username" placeholder=" Username"/>
                                </div>
                                {errors.username && <span className="help-block">{errors.username}</span>}
                            </div>          			
          			        <div className={classnames("form-group", { 'has-error': errors.password })}>
           				        <label>Password:</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </div>
                                    <input value={this.state.email} onChange={this.onChange} type="password" className="form-control" name="password" placeholder=" Password"/>
                                </div>
                                {errors.password && <span className="help-block">{errors.password}</span>}
          			        </div>         			
          			        <button disabled={this.state.isLoading } type="submit" className="btn btn-default">SIGN IN</button>
        		        </form>
                        <div style={{height:"8px"}}></div>
                        <div className="small ">New Member? <Link to={"/SignUp"} style={{color:"red",fontSize:"13px"}}>  Sign Up</Link></div>
                    </div>    
                </div>
            </div>  
        );
    }
}

LoginPage.propTypes = {
    login: React.PropTypes.func.isRequired
}

LoginPage.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginPage);
