import React from 'react';
import {Link} from "react-router";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import * as cartActions from '../../actions/cartActions'; 
import ResultList from './ResultList'; 
import Header from '../common/Header';
import toastr from 'toastr';
import { browserHistory } from 'react-router';

class ResultPage extends React.Component{

    constructor(props){
        super(props);
        this.AddtoCart=this.AddtoCart.bind(this);
        this.showDetails=this.showDetails.bind(this);
    }

    showDetails(ID,e){
        e.preventDefault();
        browserHistory.push("/details/"+ID);
    }
    AddtoCart(ID,e){
    
         console.log(this.state.products);
          e.preventDefault();
        console.log(ID);
         console.log(this.state.products);
        let cartgoods =[];
        let targetProduct = Object.assign({},this.state.products.find(product=>product.id==ID));
        
       
        if (targetProduct.Qty < 1){
            targetProduct.Qty += 1;
           
            let newProducts = [...this.state.products.filter( product => product.id != targetProduct.id ),targetProduct];
            newProducts=newProducts.sort(function(a, b) {
                        return (a.id - b.id);
            });
            this.props.actions.shoppingActions.UpdateProduct(newProducts);
            this.state.products=Object.assign([],newProducts);
            cartgoods=this.state.products.filter( product => product.Qty == 1);
            this.props.actions.cartActions.AddToCart(cartgoods) 
            
        }
        toastr.options.timeOut = 35;
        toastr.success('Item has been added to cart');
    }

    render() {
       const params = this.props;
       console.log(params.x);
		return(
            <div className="MainContentStyle" >
                <div style={{paddingLeft:"20px"}}>
                    <span className="h4 text-danger">{(this.props.results.length > 0) ? "Search Results for " + ("'"+this.props.params.x+"'") : ("'"+this.props.params.x+"'")  + "  is not in stock presently"} </span>
                </div>
                <div className="row">
                   <div className="col-sm-10 col-sm-offset-2">
                        < ResultList
                          results={this.props.results}
                          AddtoCart={this.AddtoCart}
                          showDetails={this.showDetails}
                        />
                    </div>
                </div>
                
            </div>
			)



	}


}

    function mapStateToProps(state, ownProps) {
        
        return {
           results: state.results
            
        };
    }
    

export default connect(mapStateToProps,null) (ResultPage);

    

    



