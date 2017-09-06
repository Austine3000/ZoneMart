import React, {PropTypes} from 'react';
import {Link} from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from './Carousel';
import Products from './Products';
import * as cartActions from '../../actions/cartActions';
//var ProductList = require('!json!../../assets/products.json');
import  ProductList from '../../assets/product.js';
import toastr from 'toastr';

class ShopPage extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.SaveCartInfo = this.SaveCartInfo.bind(this);
        
    }

    SaveCartInfo(product) {
        this.props.actions.createCartSuccess(product)
        toastr.success('Item has been added to cart');
    }

    render() {
    
		return(
            <div >
                <div className="container-fluid" >
                    <Carousel/>
                </div>
                <div className="container-fluid">
                    <h4 className="well">Product</h4>
                    <Products
                        ProductList={ProductList}
                        SaveCartInfo={this.SaveCartInfo}
                    />
                </div>
            </div>
        )
	}
}

ShopPage.propTypes = {
  ProductList: React.PropTypes.array.isRequired,  
  actions: React.PropTypes.object.isRequired
};

ShopPage.contextTypes = {
    router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, cartActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);







