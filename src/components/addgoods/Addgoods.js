import React from 'react';
import {Link} from "react-router";
import Header from '../common/Header';
import Thankyou from '../thankyou/Thankyou';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import * as shoppingActions from '../../actions/shoppingActions'; 
import { browserHistory } from 'react-router';

class ProductList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            id:(props.products.length) + 1 ,
            Name:"",
            Price:"",
            Description:"",
            Image:"",
            Qty:0,
            isAdded:false,
            choice:"Add To Cart"



        }

        console.log(this.props.actions);
        this.onType = this.onType.bind(this);
        this.AddToGoods = this.AddToGoods.bind(this);
        console.log(props.products);
    }
   
   onType(e){
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(e.target.name);
        console.log(e.target.value);
          console.log(this.state);
   }
  
    AddToGoods(e){
        e.preventDefault();
        console.log(this.state);
        console.log(this.props.products);
        this.props.actions.addToGoods(this.state);
        browserHistory.push('/ProductList');  
    }

    render() {
            var style2={
                color:"blue",
                textDecoration:"none",
                hover: {color: 'red'},
                padding:"0px",
                margin:"0px",
                cursror:"hand"
            }                 
                                     
        
		return(

            <div>
                
                   
                    <nav className="navbar navbar-inverse navbg-blue navbar-static-top" style={{margin: "0px", height:"70px"}} >
                                 
                                    <div className="navbar-header"  >

                                        <Link to={"/"} className="navbar-brand apptxt" ><span className="apptxt  blue glyphicon glyphicon-shopping-cart"><span className="afont">eMart</span></span></Link>
                                        
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">

                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                                    
                                        </button>

                                  </div>

                                    <div className="collapse  navbar-collapse" id="myNavbar">
                                        <ul className="nav navbar-nav navbar-right" style={{marginRight: "5px"}}>
                                            <li ><Link to={"/"} className="white_txt" style={{fontSize:"14px",color:"white"}}></Link></li>
                                            <li ><Link to={"/Checkout"} className="white_txt" style={{fontSize:"14px",color:"white"}}></Link></li> |
                                        
                                        </ul>
                                        
                                    </div>

                    </nav>  
                    <div className=" container" >
                        
                            
                        <h2 className="col-sm-8 text-info panel">Add Product
                            <div className="inlane h5 pull-right hand ">
                                    <Link style={style2} to={"/"}><button className="btn btn-xs mrg-ryt">Home</button></Link>
                                    <Link style={style2} to={"/ProductList"}><button className="btn btn-xs">All Products</button></Link>
                                </div>
                        </h2>
                        
                        
                        <div className="panel panel-default ">
                                <div className="col-sm-6">
                                    
                                    
                                    <form>
                                        <div className="form-group" style={{width:"50%"}} >
                                            <label for="email">Name of Goods</label>
                                            <input type="text" name="Name" onChange={this.onType} value={this.state.Name}  className="form-control" />
                                        </div>
                                        <div className="form-group" style={{width:"60%"}}>
                                            <label for="email">Price</label>
                                            <input type="text" name="Price" onChange={this.onType} value={this.state.Price} className="form-control"/>
                                        </div>
                                        
                                        <div className="form-group" style={{width:"70%"}}>
                                            <label for="email">Image</label>
                                            <input type="file" className="form-control" name="Image"/>
                                        </div>
                                       
                                        <textarea  className="form-control" value={this.state.Description} rows="7" style={{width:"70%"}} placeholder="Enter Goods Description"   name="Description" onChange={this.onType}></textarea>
                                        <div className="form-group" style={{marginTop:"10px"}}>
                                            <button type="button" onClick={this.AddToGoods} className="btn btn-primary " data-toggle="modal" data-target="#myModal" >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                    
                                </div> 
                        </div>
                    </div>      



                    
                
            </div>
			)



	}


}

    function mapStateToProps(state, ownProps) {
        
        return {
             products: state.products
        };
    }

    function mapDispatchToProps(dispatch) {  
    return {
        actions: bindActionCreators(shoppingActions, dispatch)
    }
    }

export default connect(mapStateToProps,mapDispatchToProps) (ProductList);