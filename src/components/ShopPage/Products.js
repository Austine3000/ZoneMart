import React from 'react';
import {Link} from "react-router";
const  Products = ({showDetails,products,AddtoCart}) => {
   
   
  
        var style2={
                fontSize:"24px",
                color:"blue",
                textDecoration:"none",
                hover: {textDecoration: "underline"},
                padding:"0px",
                margin:"0px",
                
                
            } 
        return (
            <div className="cover" >
                <div className="row  ">
                        <div className="col-sm-12"  >
                        
                            {products.map( (product,index) => 
                                <div className="col-sm-4 col-md-3" key={index}>
                                    <div className="thumbnail">
                                        
                                        <div className="caption">
                                            <h3 className="color1 " style={{marginTop:"3px"}}>{product.Name}</h3>
                                            
                                            <div className="hand" style={{marginBottom:"5px"}} onClick={showDetails.bind(this,product.id)}><span><img src={product.Image}  style={{width:"100%"}} height="200" alt={product.Name}/></span></div>
                                            <div>
                                                <p className="pull-right" >
                                                    <button  onClick={AddtoCart.bind(this,product.id)} className="btn btn-success  pull-right" role="button">Add To Cart</button>
                                                
                                                </p>
                                                    <span className="h3 color2">&#8358;{product.Price}</span>
                                                    
                                            </div>
                                        </div>
                                    </div>
                            
                                </div>
                            )}
                            
                        
                        </div>
                </div>   
                
            </div>
            )
    }
export default Products;
