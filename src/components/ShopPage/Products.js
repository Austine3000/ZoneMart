import React from 'react';
import {Link} from "react-router";

class Products extends React.Component{
    
    render() {
		return(
            <section className="cover" >
                <div className="row  ">
                    <div className="col-sm-12"  >

                        {this.props.ProductList.map(Product =>
                             <div className="col-sm-3 col-md-3" key={Product.id}>
                                    
                                <div className="thumbnail">
                                    <img className="ProductImage" src={Product.Image} alt=".." />
                                    <div className="caption">
                                        <h3 className="color1">{Product.Name}</h3>
                                        <p>{Product.Description}</p>
                                        <p>
                                            <button onClick={() => this.props.SaveCartInfo(Product)} className="btn btn-primary pull-right" role="button">
                                                Add to Cart
                                            </button> 
                                            <span className="font1">${Product.Price}</span>
                                        </p>
                                    </div>
                                </div>
                           
                            </div>
                        )}
                        
                    </div>       
                </div>   
            </section>
        )
	}


}


export default Products;