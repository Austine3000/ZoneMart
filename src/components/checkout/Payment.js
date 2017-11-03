import React, {PropTypes} from 'react';
import {Link} from "react-router";
import classnames from 'classnames';
import validateInput from './PaymentValidation';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as checkoutActions from '../../actions/checkoutActions';

import PaystackButton from 'react-paystack';
    
class Payment extends React.Component {
     constructor(props, context) {
        super(props, context);
        this.state = {
            key: "pk_test_3feef2880496a9b69ca936865b055b5eaa5db9b0", //PAYSTACK PUBLIC KEY
            email: "diribe3000@gmail.com",  // customer email
            amount: 10000 //equals NGN100,
        }
        
     }

   payWithPaystack(Total) {
    const handler = PaystackPop.setup({
      key: 'pk_test_3feef2880496a9b69ca936865b055b5eaa5db9b0',
      email: 'diribe3000@gmail.com',
      amount: Total,
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
  }
    
    render() {

        let Total = 0;

        if(this.props.cart.length > 0) { 
            let amountList =  this.props.cart.map( (cartgood,index) =>  cartgood.Price * cartgood.Qty);
            amountList.reduce((x, y) => x + y);        
            Total =  (amountList.reduce((x, y) => x + y)) * 100;
        }    
        
		return(
            <div>
                <p>
                    <button type="button" onClick={this.payWithPaystack.bind(this, Total)}> Pay </button> 
                </p>
            </div>
        )
    }
}

Payment.propTypes = {
    cart: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

Payment.contextTypes = {
    router: PropTypes.object
}


function mapStateToProps(state, ownProps) {

    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, checkoutActions), dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Payment);