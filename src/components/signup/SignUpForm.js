import React from 'react';
import { Link } from 'react-router';
import validateSignUpInput from "./signUpValidate";
import { browserHistory } from 'react-router';
class SignUpForm extends React.Component {

   constructor(props) {

    super(props);

    this.state = {
      username : "",
      email    :  "",
      password : "",
      serverResp :"",
      dErrors :{}
      
    }
    
    
    this.toSubmit = this.toSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
    
  }

 

  setValue(e){

    this.setState({

      [e.target.name] : e.target.value,

     


    });
  

  } 
      
//const {username, email, password, errors, isLoading} = this.state;
  

   
  toSubmit(e){
     e.preventDefault();
    const {dErrors, errorCheck} = validateSignUpInput(this.state);
     this.setState({
      dErrors : dErrors
     });
  
    if(errorCheck){
   const {username,email,password} = this.state;

   this.props.userSignUpRequest({username,email,password}).then((response)=>{
    
    
    //console.log("good");
    browserHistory.push("/Login");
    console.log(response.data);
    

  })
  .catch(error => {
   
     console.log( error.response);
     this.setState({
       serverResp :<div className="alert alert-danger text-center">
                        {error.response.data + "!"}
                   </div> 
      })
  
     
    
});
    
    
  
}
 
   
    }


    
  

	render(){

   

    var links={
      fontSize: "24px",
      textDecoration:"none",
      color: "#000000"


  }

  
 
		return(

     
            <div className="col-xs-8 col-xs-offset-2 col-md-4 well centralised col-md-offset-4 div-round">
                    <span> SIGN UP  </span>
                <hr style={{ borderColor : "#978b88" }}/>

                <p className="text-center"><Link to={"/"} style={links}><span className="blue glyphicon glyphicon-shopping-cart"></span>  ZoneMart</Link></p>
                
                {this.state.serverResp}
                        <form onSubmit={this.toSubmit}>

                            <div className = "form-group ">
                                <label htmlFor = "email">Username:</label>
                                <input type="text" onChange={this.setValue} value ={this.state.username} className="form-control" name="username" id="username"   placeholder="Username"/>
                        <span className="text-danger">{this.state.dErrors.username}</span>
                        
                            </div>
                            <div className = "form-group" >
                                <label htmlFor="email">Email:</label>
                                <input type="text" onChange={this.setValue} value ={this.state.email} className="form-control" name="email" id="email"   placeholder="Email"/>
                        <span className="text-danger">{this.state.dErrors.email}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd"> Password:</label>
                                <input type="password" onChange={this.setValue}  value ={this.state.password} className="form-control" name="password" id="password"    placeholder="Password"/>
                        <span className="text-danger">{this.state.dErrors.password}</span>
                            </div>
                            
                            
                            <button type="submit"  className="btn btn-default">SIGN UP</button>
                        </form>
                    <div style={{height:"8px"}}></div>
                    <div className="small ">Already a Member? <Link to={"/login"} style={{color:"red", fontSize:"13px"}}>  Sign In</Link></div>
            </div>
                

			)



	}
}

export default SignUpForm;