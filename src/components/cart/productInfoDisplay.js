import React, {PropTypes} from 'react';
import {Link} from "react-router";
import classnames from 'classnames';
import validateInput from './checkoutValidation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions  from '../../actions/loginActions';

class ProductInfoDisplay extends React.Component{
    constructor(props, context) {
        super(props, context)

        this.clearState = this.clearState.bind(this);
    }

    clearState() {
        this.props.actions.clearData();
        this.context.router.push('/');
    }
    
    render() {
        const { products } = this.props;
        let totalprice = 0;

        (function totalPrice() {
            if (products.length > 0) {
                for (let i = 0; i< products.length; i++) {
                    totalprice = totalprice + products[i].Price
                }
            }

            return totalprice;
        })();
        
		return(
            <div>
               <div className="container margin1" >
                    <h4 className="well">Order Details</h4> 
                    <div className="col-sm-12">
                        {this.props.productInfo.map((product, index) => 
                            <div key={index}>
                                <dl className="dl-horizontal">
                                    <dt className="dtStyle">Name:</dt>
                                    <dd>{product.name}</dd>
                                    <dt className="dtStyle">Phone Number:</dt>
                                    <dd>{product.phoneNumber}</dd>
                                    <dt className="dtStyle">Mode of payment:</dt>
                                    <dd>{product.modeofpayment}</dd>
                                    <dt className="dtStyle">Address:</dt>
                                    <dd>{product.address}</dd>
                                </dl>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.products.map((productItem, index) => 
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{productItem.Name}</td>
                                                <td>${productItem.Price}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th></th>
                                            <th>Total Price:</th>
                                            <th>${totalprice}</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        )}
                        <div style={{marginTop:"10px"}}>
                            <button type="button" onClick={() => this.clearState()} className="btn btn-success">Finish</button>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

ProductInfoDisplay.propTypes = {
    actions: React.PropTypes.object.isRequired
};

ProductInfoDisplay.contextTypes = {
    router: PropTypes.object
}


function mapStateToProps(state, ownProps) {

    return {
        productInfo : state.productInfo,
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, loginActions), dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoDisplay);