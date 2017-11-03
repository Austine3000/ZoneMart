import React from 'react';
import {Link} from "react-router";
import Header from '../common/Header';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import * as shoppingActions from '../../actions/shoppingActions'; 
import { browserHistory } from 'react-router'
class ManageProduct extends React.Component{

    constructor(props){
        super(props);
        this.state={
           product:Object.assign({},props.product),
           

        }
        this.onType= this.onType.bind(this);
        this.updateDetails= this.updateDetails.bind(this);
         
    }
   
   onType(e){
        e.preventDefault();
        let productEdit = Object.assign({},this.state.product);
        const field = e.target.name;
        productEdit[field] = e.target.value;
        
        this.setState({
            product:Object.assign({},productEdit)
        })
       
   }
  
    updateDetails(e){
        e.preventDefault();
        this.props.actions.updateDetails(this.state.product);
        console.log(this.state.product);
        browserHistory.push('/');  
    }


    render() {
                              
                                     
        const {Name,id,Description,Qty,Price,Image} = this.state.product;
		return(
            <div className="MainContentStyle">
                
                   
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
                        
                            
                        <h2 className="col-sm-8 text-info panel">Update Product Details</h2>
                        
                        
                        <div className="panel panel-default ">
                                <div className="col-sm-6">
                                    
                                    
                                    <form>
                                        <div className="form-group" style={{width:"50%"}} >
                                            <label for="email">Name of Goods</label>
                                            <input type="text" name="Name" onChange={this.onType} value={Name}  className="form-control" />
                                        </div>
                                        <div className="form-group" style={{width:"60%"}}>
                                            <label for="email">Price</label>
                                            <input type="text" name="Price" onChange={this.onType} value={Price} className="form-control"/>
                                        </div>
                                        
                                        <div className="form-group" style={{width:"70%"}}>
                                            <label for="email">Image</label>
                                            <input type="file" className="form-control" name="Image"/>
                                        </div>
                                       
                                        <textarea  className="form-control" value={Description} rows="7" style={{width:"70%"}} placeholder="Enter Goods Description"   name="Description" onChange={this.onType}></textarea>
                                        <div className="form-group" style={{marginTop:"10px"}}>
                                            <button type="button" onClick={this.updateDetails} className="btn btn-primary " data-toggle="modal" data-target="#myModal" >
                                                Save
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
        
        const productId = ownProps.params.id;
        let product;
        if(productId){
             product = Object.assign({},state.products.find(product=>product.id == productId));
        }
        return {
            product : product
        }
    }
    

    function mapDispatchToProps(dispatch) {  
        return {
            actions: bindActionCreators(shoppingActions, dispatch)
        }
    }

export default connect(mapStateToProps,mapDispatchToProps) (ManageProduct);


















