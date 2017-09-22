import React from 'react';
import {Link} from "react-router";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shoppingActions from '../../actions/shoppingActions';
import * as cartActions from '../../actions/cartActions'; 

class ProductDetails extends React.Component{

    constructor(props){
        super(props);
        this.state={
            
            cartproducts:[...props.cartproducts],
            iD:props.params.id,
            products:Object.assign([],props.products),
            product:Object.assign({},props.product)
            
        }
        console.log(this.state.cartproducts);
        this.onAdded = this.onAdded.bind(this);
    }

   
    componentWillReceiveProps(nextProps){
            console.log(this.props);     
            console.log(nextProps);
			if(nextProps.products != this.props.products){
               

					this.setState({

						products:Object.assign([],nextProps.products),
                        product:Object.assign([],nextProps.product)
						
			})
             
    }

   }

   

   onAdded(iD,e){
        e.preventDefault();
        
        let cartgood =[];
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
            console.log(newProducts)
            this.props.actions.shoppingActions.UpdateProduct(newProducts);
            this.state.products=Object.assign([],newProducts);

            cartgood=this.state.products.filter( product => product.Qty == 1);
            this.props.actions.cartActions.AddToCart(cartgood) 
               
         }else{

            targetProduct.Qty = 0;
            targetProduct.choice= "Add To Cart";
            let newProducts = [...this.state.products.filter( product => product.id != targetProduct.id ), Object.assign({},targetProduct)];
            newProducts=newProducts.sort(function(a, b) {
                        return (a.id - b.id);
            });
            this.props.actions.shoppingActions.UpdateProduct(newProducts);
            this.state.products=Object.assign([],newProducts);
            
            cartgood=this.state.products.filter( product => product.Qty == 1);
            this.props.actions.cartActions.AddToCart(cartgood) 

         }    
    }
        

    render() {
        const {iD} = this.state;
       const {Name,id,Qty,Description,Price,Image,choice,isAdded} = this.props.product;

       var style2={
            fontSize:"15px",
            color: "#000",
            textDecoration:"none",   
        }

		return(
            <div className="MainContentStyle">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
					    <ol className="breadcrumb">
					        <li><Link to="/" style={style2}>Home</Link></li>
					        <li className="active">{Name}</li>
					    </ol>
                         <div className="thumbnail">
                            <img className="productdetailthumbnail" src={Image} alt=""></img>
                            <div className="caption-full">
                                <h3 className="pull-right text-danger">&#8358;{Price}</h3>
                                <h3>{Name}</h3>
                                <p>{Description}</p>   
                            </div> 
                        </div>
                        <div className="text-center">
                            <button onClick={this.onAdded.bind(this,iD)} className={(isAdded ) ? "btn btn-danger btn-cart" : "btn btn-success btn-cart" }>
						        {choice}
						    </button>
					    </div>
      	            </div>
      	            <div className="col-md-2"></div>
                </div> 
            </div>
			)



	}


}

    function mapStateToProps(state, ownProps) {
            
        const productId = ownProps.params.id;
        let product;
        if(productId){
                product = Object.assign({},state.products.find( product => product.id == productId));
        }
        return {
            product : product,
            cartproducts : state.cart,
            products:state.products
        }
    }

    function mapDispatchToProps(dispatch) {  

        return {
              actions:  {
                shoppingActions: bindActionCreators(shoppingActions, dispatch),
                cartActions: bindActionCreators(cartActions, dispatch)
              }
             }

    }
    

    

export default connect(mapStateToProps,mapDispatchToProps) (ProductDetails);

