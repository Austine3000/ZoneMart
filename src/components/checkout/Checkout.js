import React from 'react';
import {Link} from "react-router";
import Header from '../common/Header';
import { browserHistory } from 'react-router';
import classnames from 'classnames';
import validateInput from './PaymentValidation';
import * as invoiceActions from '../../actions/invoiceActions'; 
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Validate from './validator';

class Checkout extends React.Component {
   
   constructor(props){
        super(props);
        this.state={
            invoiceInfo:{ name: "", phone: "", email: "", paymode: "", city: "", address: "", address2: ""},
            errors: {},
            isLoading: false
        };
        this.onChange = this.onChange.bind(this);
    }

   onSubmit(amount, e) {
        e.preventDefault();
        if (this.isValid()) {
            if (this.state.invoiceInfo.paymode == "Card Payment") {
                this.props.actions.invoiceDetails(this.state.invoiceInfo)
                const handler = PaystackPop.setup({
                    key: 'pk_test_3feef2880496a9b69ca936865b055b5eaa5db9b0',
                    email: 'diribe3000@gmail.com',
                    amount: amount,
                    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                    metadata: {
                        custom_fields: [
                            {
                                display_name: "Mobile Number",
                                variable_name: "mobile_number",
                                value: "+2348012345678"
                            }
                        ]
                    },
                    callback: function(response){
                        browserHistory.push("/InvoicePage");
                        
                    },
                    onClose: function(){
                        alert('window closed');
                    }
                });
                handler.openIframe();
            } else {
                this.props.actions.invoiceDetails(this.state.invoiceInfo);
                browserHistory.push("/InvoicePage");
            }
        }    
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state.invoiceInfo);
        if(!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    onChange(event) {
		const entry = event.target.name;
		let invoiceInfo = this.state.invoiceInfo;
		invoiceInfo[entry] = event.target.value;
        //let products = this.props.products;
		return this.setState({invoiceInfo: invoiceInfo});

	}
    render() {
                              
    let Total = 0;
    let amount = 0;

    if(this.props.cart.length > 0) { 
        let amountList =  this.props.cart.map( (cartgood,index) =>  cartgood.Price * cartgood.Qty);
        amountList.reduce((x, y) => x + y);        
        Total =  amountList.reduce((x, y) => x + y);
        amount = Total * 100;
    }   

    
    const { errors, invoiceInfo, isLoading } = this.state; 
        
		return(
            <div className="MainContentStyle">
                <div className="container" >                
                        <p className="col-sm-10 h4 panel mypanel" >Please enter your billing details </p><div className="col-sm-2 amt ">Total Amount: <span className="h2 redz">{"$" + Total}</span></div>
                    <div className="panel panel-default ">
                            <div className="col-sm-12">
                                
                                <form onSubmit={this.onSubmit.bind(this, amount)}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className={classnames("form-group", { 'has-error': errors.name })} >
                                                <label>Name</label>
                                                <input type="text" name="name" placeholder="Enter your name" onChange={this.onChange} value={this.state.invoiceInfo.name} className="form-control" id="email"/>
                                                {errors.name && <span className="help-block">{errors.name}</span>}
                                            </div>
                                            <div className={classnames("form-group", { 'has-error': errors.phone })} >
                                                <label>Phone Number</label>
                                                <input type="text" name="phone" placeholder="Enter your Phone Number" onChange={this.onChange}  value={this.state.invoiceInfo.phone} className="form-control" id="phone"/>
                                                {errors.phone && <span className="help-block">{errors.phone}</span>}
                                            </div>
                                            <div className={classnames("form-group", { 'has-error': errors.email })} >
                                                <label>Email</label>
                                                <input type="text"  name="email" placeholder="Enter your Email Address" onChange={this.onChange}  value={this.state.invoiceInfo.email} className="form-control" id="email"/>
                                                {errors.email && <span className="help-block">{errors.email}</span>}
                                            </div>
                                            <div className={classnames("form-group", { 'has-error': errors.paymode })} >
                                                <label>Mode of Payment:</label>
                                                <select className="form-control"  name="paymode" onChange={this.onChange.bind(this)} >
                                                    <option  value="">Select a payment Mode</option>
                                                    <option value="Pay on Delivery">Pay on Delivery</option>
                                                    <option value="Card Payment">Pay with card</option>
                                                    
                                                </select>
                                                {errors.paymode && <span className="help-block">{errors.paymode}</span>}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className={classnames("form-group", { 'has-error': errors.city })} >
                                                <label>City</label>
                                                <input type="text" name="city" placeholder="Enter your city name" onChange={this.onChange}  value={this.state.invoiceInfo.city} className="form-control" id="city"/>
                                                {errors.city && <span className="help-block">{errors.city}</span>}
                                            </div>
                                            <div className={classnames("form-group", { 'has-error': errors.address })} >
                                                <label>Shipping Address 1:</label>
                                                <textarea className="form-control"  rows="3"  placeholder="Enter your shipping address"  value={this.state.invoiceInfo.address} name="address" onChange={this.onChange}></textarea>
                                                {errors.address && <span className="help-block">{errors.address}</span>}
                                            </div>
                                            <div className={classnames("form-group", { 'has-error': errors.address2 })} >
                                                <label>Shipping Address 2:</label>
                                                <textarea className="form-control"  rows="3"  placeholder="Enter an alternative shipping address"  value={this.state.invoiceInfo.address2} name="address2" onChange={this.onChange}></textarea>
                                                {errors.address2 && <span className="help-block">{errors.address2}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{marginTop:"10px"}}>
                                        <button  className="btn btn-primary " disabled={this.state.isLoading } type="submit">
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

Checkout.propTypes = {
    cart: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
        
        return {
            invoiceInfo:state.invoiceInfo,
            cart: state.cart
        };
    }


function mapDispatchToProps(dispatch) {  
   return {
              actions:bindActionCreators(invoiceActions, dispatch)
              
          }
    }

export default connect(mapStateToProps,mapDispatchToProps) (Checkout);













