import React from 'react';
import {Link} from "react-router";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import * as cartActions from '../../actions/cartActions'; 
import * as shoppingActions from '../../actions/shoppingActions'; 
import toastr from 'toastr';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cart:Object.assign([],props.cart),
            products:Object.assign([],props.products)
        }
            this.AddToQty=this.AddToQty.bind(this);
            this.ReduceQty=this.ReduceQty.bind(this);
            this.removeFromCart = this.removeFromCart.bind(this);
           console.log(this.props.actions);
    }
    componentWillReceiveProps(nextProps){
            console.log(nextProps.cart);
            if(nextProps.cart != this.props.cart){
               
                   
                    this.setState({
                        cart:Object.assign([],nextProps.cart),
                        products:Object.assign([],nextProps.products),
                        
                        
            })
             console.log(this.props.cart);
             console.log(nextProps.cart);
    }
   }
    
    removeFromCart(goodId,e){
    e.preventDefault();
     this.props.actions.cartActions.removeFromCart(goodId);
     let targetProduct=Object.assign({},this.state.products.find(product => product.id == goodId));
     targetProduct.isAdded=false;
     targetProduct.choice="Add To Cart";
     targetProduct.Qty=0;
   
    let newProducts=[...this.state.products.filter(product => product.id != targetProduct.id),targetProduct];
    newProducts=newProducts.sort(function(a, b) {
                    
                    return (a.id - b.id);
                });
    this.props.actions.shoppingActions.UpdateProduct(newProducts);
    toastr.options.timeOut = 35;
    toastr.error('Item has been removed from cart');
     
    }
    AddToQty(goodID,e){
     
        e.preventDefault();
        let mockCart=Object.assign([],this.state.cart);
        let good_target = mockCart.find(cartgood => cartgood.id == goodID);
        let dQty=good_target.Qty + 1;
        good_target = Object.assign({},good_target,{Qty:dQty});
            console.log(good_target.id);
            console.log(good_target);
        good_target = Object.assign({},good_target);
               
                
               let newCart =[...mockCart.filter(cartgood => cartgood.id != good_target.id), Object.assign({}, good_target)];
                newCart= newCart.sort(function(a, b) {
                 return (a.id - b.id);
               });
            
             
             console.log( newCart );
            
             console.log(this.state.products);
           this.props.actions.cartActions.UpdateCart(newCart);

           //toastr.info('Item has been increase by one');
   
   }
 
  ReduceQty(goodID,e) {
     
        e.preventDefault();
        let dQty;
        let mockCart=Object.assign([],this.state.cart);
        let good_target = mockCart.find(cartgood => cartgood.id == goodID);
        if(good_target.Qty >1){
        dQty=good_target.Qty - 1;
         console.log(dQty);
        }else{
            dQty=1;
        }
        console.log(dQty);
        good_target = Object.assign({},good_target,{Qty:dQty});
        console.log(good_target.id);
        console.log(good_target);
        good_target = Object.assign({},good_target);
               
                
        let newCart =[...mockCart.filter(cartgood => cartgood.id != good_target.id), Object.assign({}, good_target)];
        newCart= newCart.sort(function(a, b) {
            return (a.id - b.id);
        });
            
             
             console.log( newCart );
            
             console.log(this.state.products);
           this.props.actions.cartActions.UpdateCart(newCart);

           //toastr.error('Item has been reduced by one');
   
   }
    render() {
        var style2={
            fontSize:"12px",
            textDecoration:"none",   
        }
        let Total=0;
console.log(this.props.cart);
             
            let  tableRow  = (this.state.cart.length > 0) ? this.state.cart.map( (cartgood,index) => 
                                                        
            
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{cartgood.Name}</td>
                    <td>{cartgood.Qty}</td>
                    <td>&#8358;{cartgood.Price}</td>
                    <td>&#8358;{cartgood.Price * cartgood.Qty}</td>
                    <td>
                        <button onClick={this.removeFromCart.bind(this,cartgood.id)} className="btn btn-danger btn-xs">Remove</button>
                        
                    </td>
                    <td > <button name={`btn${index}`} onClick={this.AddToQty.bind(this,cartgood.id)} className="btn btn-info btnqty btn-xs pull-right" role="button"><span className="glyphicon glyphicon-plus"></span></button></td>
                    <td > <button name={`btn${index}`} onClick={this.ReduceQty.bind(this,cartgood.id)} className="btn btn-info btnqty btn-xs btn-danger " role="button"><span className="glyphicon glyphicon-minus"></span></button></td>
                </tr>
                            ): <tr className="h3">Cart is EMPTY!</tr> ;
        
            let isDisable = true  
                                                          
            if(this.props.cart.length > 0) { 
                let amountList =  this.props.cart.map( (cartgood,index) =>  cartgood.Price * cartgood.Qty);
                amountList.reduce((x, y) => x + y);        
                Total =  amountList.reduce((x, y) => x + y);
                isDisable = false;
            }                                      
                                                              
        
        return(
            <div className="MainContentStyle">
                    <div className="container" >
                        
                            
                            <p className="col-sm-10 h4 panel mypanel" >Please, Confirm Your Order and Checkout Your Cart </p><div className="col-sm-2 amt ">Total Amount: <span className="h2 redz">&#8358;{Total}</span></div>
                            
                        
                        <div className="col-sm-8">
                            <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Goods</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                        <th>Amount</th>
                                        <th><span className="glyphicon glyphicon glyphicon-remove text-danger"></span>Remove</th>
                                        <th className="smallFont text-success"><div className="pull-right"><span className="glyphicon glyphicon glyphicon-plus  "></span>Add Qty</div></th>
                                        <th className="smallFont text-danger"><span className="glyphicon glyphicon glyphicon-minus"></span>Reduce Qty</th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                        
                                              {tableRow} 
                                        </tbody>        
                                   
                                     
                            </table>
                            
                        </div>
                        <div className="col-sm-3 col-sm-offset-1">
                            <img src={require("../../image/cart.jpg")} style={{width:"100%",marginTop:"100px"}} alt="..."/>
                            
                        </div>    
                        
                    </div>      
                    <div className="col-sm-6 pull-right" style={{paddingLeft:"2%",marginTop:"35px"}} >
                        <Link style={style2}   to={"/"} className="btn btn-success spacingRyt">CONTINUE SHOPPING</Link>
                        <Link style={style2} to={"/Checkout"} disabled={isDisable} className="btn btn-warning">CHECKOUT</Link>
                     </div>
                    
                
            </div>
            )
    }
}
function mapStateToProps(state, ownProps) {
        
        return {
            products: state.products,
            cart: state.cart
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
export default connect(mapStateToProps,mapDispatchToProps) (Cart);
