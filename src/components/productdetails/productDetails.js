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

		return(
            <div >
                <nav className="navbar navbar-inverse navbg-blue navbar-static-top" style={{margin: "0px", height:"70px"}} >
                                 
                    <div className="navbar-header">

                        <Link to={"/"} className="navbar-brand apptxt" ><span className="apptxt  blue glyphicon glyphicon-shopping-cart"><span className="afont">eMart</span></span></Link>
                        
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">

                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                                    
                        </button>

                    </div>

                    <div className="collapse  navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right" style={{marginRight: "5px"}}>
                            
                            <li ><Link to={"/"} className="white_txt" style={{fontSize:"12px",color:"white"}}>Product page</Link></li>
                            <li ><Link to={"/Cart"} className="white_txt" style={{fontSize:"12px",color:"white"}}>View My Cart</Link></li>
                            
                        
                        </ul>
                        
                    </div>

                </nav>  
                <div  style={{marginTop:"40px"}}>

                    <div className="col-sm-3" >
                        <img src={Image}  style={{width:"100%"}} height="300" alt={Name}/>
                    </div>
                    <div className="col-sm-3">

                        <h1>{Name}</h1>
                        <h2 className="text-danger">{"$"+Price}</h2>
                        <hr/>
                        <div className="describe">{Description}</div>
                      
                       
                        <button  onClick={this.onAdded.bind(this,iD)} className={(isAdded ) ? "btn btn-danger btn-xs pull-right" : "btn btn-success btn-xs pull-right" }>{choice}</button>
                    </div>
                   
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

