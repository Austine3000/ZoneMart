import React from 'react';
import {Link} from "react-router";

const  Products = ({showDetails,products,onAdded}) => {
   

   
  
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
                                                <p className="pull-right " >
                                                    <button  onClick={onAdded.bind(this,product.id)} 
                                                    className={(product.isAdded ) ? "btn btn-danger  pull-right" : "btn btn-success  pull-right" }
                                                    role="button">{product.choice}</button>
                                                
                                                </p>
                                                    <span className="h3 color2">{"$" + product.Price}</span>
                                                    
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









// import React from 'react';
// import {Link} from "react-router";

// class Products extends React.Component{
   

//     render() {
        
//         var style2={
//                 fontSize:"24px",
//                 color:"blue",
//                 textDecoration:"none",
//                 hover: {textDecoration: "underline"},
//                 padding:"0px",
//                 margin:"0px",
                
                
//             } 

// 		return(
//             <div className="cover" >
//                 <div className="row  ">
//                     <div className="col-sm-12"  >
                        
//                         {this.props.products.map( (product,index) => 
//                             <div className="col-sm-4 col-md-3" key={index}>

//                                 <div className="thumbnail ">
//                                     <p href="#"> <span className="badge pull-right">Qty: {product.Qty}</span></p>
//                                     <div className="caption">
//                                         <h3 className="color1">{product.Name}</h3>
                                        
//                                         <div className="hand" onClick={this.props.showDetails.bind(this,product.id)}><span><img src={product.Image}  style={{width:"100%"}} height="200" alt={product.Name}/></span></div>
//                                         <div>
//                                             <p className="pull-right ">
//                                                 <button name={`btn${index}`} onClick={this.props.ReduceQty.bind(this,product.id)}className="btn btn-danger btn-xs " role="button"><span className="glyphicon glyphicon-minus"></span></button>
//                                                 <button name={`btn${index}`} onClick={this.props.AddToQty.bind(this,product.id)} className="btn btn-info btnqty btn-xs " role="button"><span className="glyphicon glyphicon-plus"></span></button> 
//                                             </p>
//                                                
//                                         </div>
//                                     </div>
//                                 </div>
                           
//                             </div>
//                         )}
                            
                        
//                     </div>

                    
//                 </div>   
                
                    



                
//             </div>
// 			)



// 	}


// }
// /*<img src={require("../../fruits/"+ product.Image)} />*/

// export default Products;