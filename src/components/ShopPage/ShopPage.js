import React from 'react';
import {Link} from "react-router";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import * as shoppingActions from '../../actions/shoppingActions'; 
import * as cartActions from '../../actions/cartActions'; 
import Carousel from './Carousel';
import Products from './Products';
import Header from '../common/Header';
import { browserHistory } from 'react-router';


class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cartproducts:[...props.cartproducts],
            products:Object.assign([],props.products),
            targetProduct:{},
        
           
        }
       console.log(this.state.targetProduct.isAdded);
       
        //this.saveCartgoods= this.saveCartgoods.bind(this);
        this.showDetails=this.showDetails.bind(this);
        this.onAdded=this.onAdded.bind(this);
           console.log(this.state.products);
    }
 
  componentWillReceiveProps(nextProps){
 console.log(this.props);     
console.log(nextProps);
			if(nextProps.products != this.props.products){
               

					this.setState({

						products:Object.assign([],nextProps.products)
						
			})
             
    }

   }

    onAdded(iD,e){
        e.preventDefault();
        
        let cartgoods =[];
        let targetProduct = Object.assign({},this.state.products.find(product=>product.id==iD));
        console.log(iD);

        targetProduct.isAdded=(!targetProduct.isAdded);
        if (targetProduct.isAdded){
            targetProduct.Qty = 1;
            targetProduct.choice= "Remove";
            let newProducts = [...this.state.products.filter( product => product.id != targetProduct.id ),targetProduct];
            newProducts=newProducts.sort(function(a, b) {
                        return (a.id - b.id);
            });
            this.props.actions.shoppingActions.UpdateProduct(newProducts);
            this.state.products=Object.assign([],newProducts);

            cartgoods=this.state.products.filter( product => product.Qty == 1);
            this.props.actions.cartActions.AddToCart(cartgoods) 
               
         }else{

            targetProduct.Qty = 0;
            targetProduct.choice= "Add To Cart";
            let newProducts = [...this.state.products.filter( product => product.id != targetProduct.id ), Object.assign({},targetProduct)];
            newProducts=newProducts.sort(function(a, b) {
                        return (a.id - b.id);
            });
            this.props.actions.shoppingActions.UpdateProduct(newProducts);
            this.state.products=Object.assign([],newProducts);
            
            cartgoods=this.state.products.filter( product => product.Qty == 1);
            this.props.actions.cartActions.AddToCart(cartgoods) 

         }    
    }
        

   showDetails(ID,e){
       browserHistory.push("/details/"+ID);
   }
  
  
    render() {
       
        
console.log(this.props.cartproducts);
      


		return(
            <div >
                {this.state.btnValue}
                <div className="fixd btn " style={{color:"white"}}>
                    <Link to={"/Cart"} className="white_txt" style={{fontSize:"14px",color:"#FFFFFF"}}>View My Cart </Link>|
                </div>
                <div>
                    <Header /> 
                </div>
                <div className="container-fluid" style={{paddingRight:"0px",paddingLeft:"0px"}} >
                    <Carousel/>
                </div>
                <div className="container-fluid" style={{marginTop:"40px"}}>
                    <Products 
                    showDetails={this.showDetails}
                    products={this.state.products} 
                    onAdded={this.onAdded}
                     />
                </div>
            </div>
			)



	}


}

ShopPage.propTypes = {
    
}

function mapStateToProps(state, ownProps) {
        
        return {
            products: state.products,
            cartproducts : state.cart,
            
        };
    }

    function mapDispatchToProps(dispatch) {  

        return {
              actions:  {
                shoppingActions: bindActionCreators(shoppingActions, dispatch),
                cartActions: bindActionCreators(cartActions, dispatch)
              }
             }

    }

export default connect(mapStateToProps,mapDispatchToProps) (ShopPage);


















/*
AddToQty(productID,e){
     
        e.preventDefault();
        let mockProducts=Object.assign([],this.state.products);
        let product_target = mockProducts.find(product => product.id == productID);
            
            product_target =Object.assign({},product_target,
            { Qty:product_target.Qty + 1}
            )

               let sortedProducts =[];
               mockProducts =[...mockProducts.filter(product => product.id != product_target.id),Object.assign({},product_target)];
                sortedProducts = mockProducts.sort(function(a, b) {
                 return (a.id - b.id);
               });
             
             this.state.products=Object.assign([],sortedProducts);
             
            console.log( sortedProducts );

             console.log(this.state.products);
           this.props.actions.UpdateProductQty(this.state.products);
   
   }



    
  ReduceQty(productID,e){
     
        e.preventDefault();
        let mockProducts=Object.assign([],this.state.products);
        let product_target = mockProducts.find(product => product.id == productID);
            
            product_target =Object.assign({},product_target,
            { Qty:product_target.Qty - 1}
            )

               let sortedProducts =[];
               mockProducts =[...mockProducts.filter(product => product.id != product_target.id),Object.assign({},product_target)];
                sortedProducts = mockProducts.sort(function(a, b) {
                 return (a.id - b.id);
               });
             
             this.state.products=Object.assign([],sortedProducts);
             
            console.log( sortedProducts );

             console.log(this.state.products);
           this.props.actions.UpdateProductQty(this.state.products);
   
   }
for Multiple actions
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      todoActions: bindActionCreators(todoActions, dispatch),
      counterActions: bindActionCreators(counterActions, dispatch)
    }
  };
}

*/