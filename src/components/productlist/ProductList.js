import React from 'react';
import {Link} from "react-router";
import Header from '../common/Header';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import * as shoppingActions from '../../actions/shoppingActions'; 
import * as cartActions from '../../actions/cartActions'; 
import { browserHistory } from 'react-router'
class ProductList extends React.Component{
      constructor(props){
        super(props);
        this.state={
          
           products:props.products

        }
        this.onDelete = this.onDelete.bind(this);
     
       
         
    }
     componentWillReceiveProps(nextProps){

			if(nextProps.products.length != this.props.products.length){
               

					this.setState({

						products:Object.assign([],nextProps.products)
						
			})
             
    }

   }

  
    onDelete(ID,e){
       e.preventDefault();
        this.props.actions.deleteproduct(ID);
        console.log(this.props.products);
        
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
            var style={
                color:"white",
                textDecoration:"none",
                hover: {color: 'red'},
                padding:"0px",
                margin:"0px",
                cursror:"hand"
            }                                                  
        
		return(

                <div className="MainContentStyle">
                    <div className="container">
                        <h2 className="col-sm-8 text-info panel"> Products
                            <div className="inlane h5 pull-right hand ">
                                <Link style={style2} to={"/"}><button className="btn btn-xs mrg-ryt">Home</button></Link>
                                <Link style={style2} to={"/Addgoods"}><button className="btn btn-xs"><span className="glyphicon glyphicon-plus text-warning"></span>Add Product</button></Link>
                            </div>
                            </h2>
                        <div className="col-sm-6">
                            <ul className="list-group">
                                {this.state.products.map((product,index) =>
                                    
        
                                        <li key={index}  className="list-group-item">{product.Name}
                                            <span className="hand badge"><Link style={style}  to={"/ManageProduct/"+ product.id}>Edit Info</Link></span> 
                                            <span className="hand badge text-danger" onClick={this.onDelete.bind(this,product.id) } >Delete</span>
                                            </li>

                                    )
                                }


                            </ul>
                            
                        </div>
                    </div>
                </div>
			)



	}


}

    function mapStateToProps(state) {
            
            return {
                products: state.products
            }
    }

    function mapDispatchToProps(dispatch) {  
        return {
            actions: bindActionCreators(shoppingActions, dispatch)
        };
    }

export default connect(mapStateToProps,mapDispatchToProps) (ProductList);









