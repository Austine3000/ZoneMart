import React from 'react';
import {Link} from "react-router";
import Header from '../common/Header';
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

    uploadImg() {
		filepicker.pick(
			{
		    mimetype: 'image/*',
		    container: 'modal',
		    services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
		    openTo: 'COMPUTER'
		  },
		  function(Blob){
		    console.log(JSON.stringify(Blob));
		    const handler = Blob.url.substring(Blob.url.lastIndexOf('/') + 1);
		    document.getElementById('button-upload').dataset.handler = handler;
		  },
		  function(FPError){
		  	console.log(FPError.toString());
		  }
		);
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
   
   uploadImg() {
		filepicker.pick(
			{
		    mimetype: 'image/*',
		    container: 'window',
		    services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
		    openTo: 'COMPUTER'
		  },
		  function(Blob){
		    console.log(JSON.stringify(Blob));
		   let handler = Blob.url.substring(Blob.url.lastIndexOf('/') + 1);
            handler ="https://cdn.filestackcontent.com/" +  handler;
		    document.getElementById('ImageBtn').dataset.handler = handler;
		  },
		  function(FPError){
		  	console.log(FPError.toString());
		  }
		);
	}

    AddToGoods(e){
        e.preventDefault();
        this.state.Image=document.getElementById('ImageBtn').dataset.handler;
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

            <div className="MainContentStyle">
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
                                             <button type="button" onClick={this.uploadImg} id="ImageBtn" name="Image"  className="btn btn-primary "  >
                                                Upload Image : <small>Click to Select Image</small>
                                            </button>
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