import React, {PropTypes} from 'react';
import {Link} from "react-router";
import classnames from 'classnames';
import validateInput from './checkoutValidation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as checkoutActions from '../../actions/checkoutActions';

class Checkout extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            checkout: { name: "", phoneNumber: "", modeofpayment: "", address: "", products: []},
            errors: {},
            isLoading: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onSubmit(e) {
        e.preventDefault();
        if(this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            const entry = "products";
            let checkout = this.state.checkout;
            checkout[entry] = this.props.products;
            this.setState({checkout: checkout});
            this.props.actions.createCheckout(checkout)
            this.context.router.push('/productInfoDisplay')
        }
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state.checkout);
        if(!isValid) {
            this.setState({ errors })
        }
        return isValid;
    }

    onChange(event) {
		const entry = event.target.name;
		let checkout = this.state.checkout;
		checkout[entry] = event.target.value;
        //let products = this.props.products;
		return this.setState({checkout: checkout});

	}
    
    render() {

        const { errors, checkout, isLoading } = this.state;
        
		return(
            <div>
                <div className=" container margin1">
                    <div className="panel panel-default ">
                        <div className="col-sm-6">
                            <h3>Please Enter Your Details</h3>
                            <form onSubmit={this.onSubmit}>
                                <div className={classnames("form-group", { 'has-error': errors.name })} >
                                    <label >Name</label>
                                    <input value={this.state.checkout.name} onChange={this.onChange} type="text" className="form-control" name="name"/>
                                    {errors.name && <span className="help-block">{errors.name}</span>}
                                </div>
                                <div className={classnames("form-group", { 'has-error': errors.phoneNumber })} >
                                    <label >Phone Number</label>
                                    <input value={this.state.checkout.phoneNumber} onChange={this.onChange} type="text" className="form-control" name="phoneNumber"/>
                                    {errors.phoneNumber && <span className="help-block">{errors.phoneNumber}</span>}
                                </div>
                                <div className={classnames("form-group", { 'has-error': errors.modeofpayment })}>
                                    <label>Mode of Payment:</label>
                                    <select value={this.state.checkout.modeofpayment} onChange={this.onChange} className="form-control" name="modeofpayment">
                                        <option>Select Payment Type</option>
                                        <option>Master Card</option>
                                        <option>Pay on Delivery</option>
                                        <option>Visa card</option> 
                                    </select>
                                    {errors.modeofpayment && <span className="help-block">{errors.modeofpayment}</span>}
                                </div>
                                <div className={classnames("form-group", { 'has-error': errors.address })} >
                                    <label for="address">Address</label>
                                    <input value={this.state.checkout.address} onChange={this.onChange} type="text" className="form-control" name="address"/>
                                    {errors.address && <span className="help-block">{errors.address}</span>}
                                </div>
                                <div className="form-group" style={{marginTop:"10px"}}>
                                    <button type="submit" className="btn btn-success">Submit</button>
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
    products: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

Checkout.contextTypes = {
    router: PropTypes.object
}


function mapStateToProps(state, ownProps) {

    return {
        products : state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, checkoutActions), dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);