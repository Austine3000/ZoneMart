import React, {PropTypes} from 'react';
import {Link} from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../actions/cartActions';
import toastr from 'toastr';

class Cart extends React.Component{
    constructor(props, context) {
        super(props, context);
    
        this.deleteCart = this.deleteCart.bind(this);
    }

    deleteCart(product) {
        this.props.actions.deleteCartSuccess(product);
        toastr.error('Item has been removed to cart');
    }

    render() {
        const { products } = this.props;
        let totalprice = 0;
        let isDisabled = true;

        (function totalPrice() {
            if (products.length > 0) {
                isDisabled = false;
                for (let i = 0; i<products.length; i++) {
                    totalprice = totalprice + products[i].Price
                }
            }
            return isDisabled;
        })();
       
		return(
            <div>
                <div className="container-fluid margin1" >
                    <h4 className="well">Please Confirm Your Order and Checkout Your Cart</h4> 
                    <div className="col-sm-12">
                        <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => 
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{product.Name}</td>
                                            <td>${product.Price}</td>
                                            <td><button onClick={() => this.deleteCart(product)} className="btn btn-danger">Remove</button></td>
                                        </tr>
                                    )}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Total Price:</th>
                                        <th>${totalprice}</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                        </table>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <Link to={"/Checkout"} ><button disabled={isDisabled} type="button" className="btn btn-success">Proceed to checkout</button></Link>
                    </div> 
                </div>            
            </div>
        )
    }
}

Cart.propTypes = {
    products: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

Cart.contextTypes = {
    router: PropTypes.object
}


function mapStateToProps(state, ownProps) {
    return {
        products : state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, cartActions), dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

