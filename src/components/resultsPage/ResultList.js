import React from 'react';
import {Link} from "react-router";
import { browserHistory } from 'react-router';
const  ResultList = ({showDetails,results,AddtoCart}) => {
   
   
  
        var style2 = {

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
                        
                            {results.map( (result,index) => 
                                <div className="col-sm-4 col-md-3" key={index}>
                                    <div className="thumbnail">
                                        
                                        <div className="caption">
                                            <h3 className="color1 " style={{marginTop:"3px"}}>{result.Name}</h3>
                                            
                                            <div className="hand" style={{marginBottom:"5px"}} onClick={showDetails.bind(this,result.id)}><span><img src={result.Image}  style={{width:"100%"}} height="200" alt={result.Name}/></span></div>
                                            <div>
                                                <p className="pull-right" >
                                                    <button  onClick={AddtoCart.bind(this,result.id)} className="btn btn-success  pull-right" role="button">Add To Cart</button>
                                                
                                                </p>
                                                    <span className="h3 color2">&#8358;{result.Price}</span>
                                                    
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
export default ResultList;
