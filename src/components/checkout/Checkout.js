import React from 'react';
import {Link} from "react-router";
import Header from '../common/Header';
import { browserHistory } from 'react-router'
import * as invoiceActions from '../../actions/invoiceActions'; 
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import Validate from './validator';

class Checkout extends React.Component{
   
   constructor(props){
        super(props);
        console.log(props.invoiceInfo);
        this.state={
            invoiceInfo:Object.assign({},props.invoiceInfo),
            isDisabled:true,
            

        }
         this.userInput=this.userInput.bind(this);
         this.goInvoice=this.goInvoice.bind(this); 
    }

    userInput(e){
        e.preventDefault();
        let info = this.state.invoiceInfo;
        let field =[e.target.name];
        info[field]= e.target.value;
        this.setState({
                            
            invoiceInfo:Object.assign({},info)
        })
       this.state.isDisabled = (this.state.invoiceInfo.name && this.state.invoiceInfo.phone && this.state.invoiceInfo.address) ? false : true
    }

    goInvoice(e){
         e.preventDefault();
        this.props.actions.invoiceDetails(this.state.invoiceInfo);
        browserHistory.push("/InvoicePage");

    }
    
    

    render() {
                              
                                     
        
		return(
            <div>
                
                   
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
                                        <li ><Link to={"/Cart"} className="white_txt" style={{fontSize:"12px",color:"white"}}>View My Cart</Link></li>
                                        <li ><Link to={"/"} className="white_txt" style={{fontSize:"12px",color:"#FFFFFF"}}>Product Page </Link></li >
                                    </ul>
                                    
                                </div>

                        </nav>   
        
                       
                    </div>
                    <div className=" container" >
                        
                            
                            <p className="col-sm-10 h4 panel mypanel" >Customer Details</p>
                        
                        
                        <div className="panel panel-default ">
                                <div className="col-sm-6">
                                    <h3>Please,Enter Your Details</h3>
                                    
                                    <form>
                                        <div className="form-group" >
                                            <label for="email">Name</label>
                                            <input type="text" name="name" required="required" onChange={this.userInput} value={this.state.invoiceInfo.name} className="form-control" id="email"/>
                                        </div>
                                        <div className="form-group" >
                                            <label for="email">Phone Number</label>
                                            <input type="text" required="required" name="phone" onChange={this.userInput}  value={this.state.invoiceInfo.phone} className="form-control" id="email"/>
                                        </div>
                                        <div className="form-group" >
                                        <label for="sel1">Mode of Payment:</label>
                                            <select required="required" className="form-control"  name="paymode" onChange={this.userInput.bind(this)} >
                                                <option  value="">Select a payment Mode</option>
                                                <option value="cash on Delivery">Cash on Delivery</option>
                                                <option value="Master Card">MasterCard</option>
                                                 <option value="Visa Card">Visa card</option>
                                                
                                            </select>
                                        </div>
                                        <textarea  required="required" className="form-control"  rows="7"  placeholder="Enter Your Address"  value={this.state.invoiceInfo.address} name="address" onChange={this.userInput}></textarea>
                                        <div className="form-group" style={{marginTop:"10px"}}>
                                            <button  className="btn btn-primary " onClick={this.goInvoice} disabled={this.state.isDisabled}>
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                    
                                </div> 
                        </div>
                    </div>      



                    
                
            </div>
			)



	}


}
function mapStateToProps(state, ownProps) {
        
        return {
            invoiceInfo:state.invoiceInfo
        };
    }


function mapDispatchToProps(dispatch) {  
   return {
              actions:bindActionCreators(invoiceActions, dispatch)
              
          }
    }

export default connect(mapStateToProps,mapDispatchToProps) (Checkout);













