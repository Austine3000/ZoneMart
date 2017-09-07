
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as invoiceActions from '../../actions/invoiceActions'; 

class InvoicePage extends React.Component {

   	
    onDownload() {
        const {name,phone,paymode,address} = this.props.invoiceInfo;
        
        var pdf = new jsPDF();

        pdf.setFontSize(22);
        pdf.text(14, 10, 'Order Invoice');
        pdf.setFontSize(16);
        pdf.text(14, 20, 'Name: ' + name);
        pdf.text(14, 30, 'Phone Number: ' + phone);
        pdf.text(14, 40, 'Mode of Payment: ' + paymode);
        pdf.text(14, 50, 'Address: ' + address);
        pdf.text(14, 60, '.......................................');
        pdf.setFontSize(14);
        let Total=0; 
        let n;
        this.props.cart.forEach( function (product,index)
        {
            
            let x = product.Name + "  "  + "Qty:" + product.Qty + "  "  +" Price: $"  + product.Price+ "  Amount: $" + (product.Qty*product.Price) ;
            n = 60 + ((index+1) * 10);
            pdf.text(12, n, "#" + (index + 1) + ":" + x );
            Total = Total + (product.Qty*product.Price);
        });
        pdf.setFontSize(16);
        pdf.text(14, (n+20), 'Total Amount: $' + Total );
        pdf.save("eMart_Invoice.pdf");
    }
    
    render() {

            let Total;

            const {name,phone,paymode,address}= this.props.invoiceInfo;

            if(this.props.cart.length > 0) { 

                    let amountList =  this.props.cart.map( (cartgood,index) =>  cartgood.Price * cartgood.Qty);
                    amountList.reduce((x, y) => x + y);        
                    Total =  amountList.reduce((x, y) => x + y);
                }    

            var links={

                    fontSize: "12px",
                    textDecoration:"none",
                    color: "#FFFFFF"


                }
                
            return (

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
                                                <li ><Link to={"/Cart"} className="white_txt" style={{fontSize:"12px",color:"white"}}>View Cart</Link></li>
                                                <li ><Link to={"/Checkout"} className="white_txt" style={{fontSize:"12px",color:"white"}}>Edit Details</Link></li>
                                                <li ><Link to={"/"} className="white_txt" style={{fontSize:"12px",color:"#FFFFFF"}}>Product Page </Link></li >
                                                
                                            </ul>
                                            
                                        </div>

                                </nav>   
                    <div className="container col-sm-offset-2" style={{marginTop:"20px"}}>
                            <div className="row">

                                <h4 style={{color:"#192eef"}}>Customer Details </h4>
                                <div className="col-sm-6" >
                                    
                                    <p className="h6">Name :   <span className="h5 capital" style={{color:"#801c23"}}>{name}</span></p>
                                    <p className="h6">Phone Number :    <span className="h5" style={{color:"#801c23"}}>{phone}</span>         </p>
                                    <p className="h6">Mode of Payment : <span className="h5" style={{color:"#801c23"}}>{paymode}</span>            </p>
                                    
                                </div>
                                <div className="col-sm-6" >
                                    <p className="pull-left h6">Address:</p><div style={{color:"#801c23"}} className="addressdiv pull-left h5">{address}</div>
                                    
                                </div>
                                    
                            </div>
                                
                            <div className="row">
                                <h4 style={{color:"#192eef"}}>Order Details</h4>
                                    <div className=" col-sm-8 ">
                                        
                                        <table className="table " >
                                                <thead style={{background:"#9ad6e3"}}>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Goods</th>
                                                        <th>Qty</th>
                                                        <th>Price</th>
                                                        <th>Amount</th>
                                                    
                                                    </tr>
                                                </thead>

                                                <tbody>
                                        
                                                    { this.props.cart.map( (cartgood,index) =>
                                                    
                                                
                                                        <tr key={index} style={{color:"#2B1459"}}>
                                                            <th scope="row">{index+1}</th>
                                                            <td>{cartgood.Name}</td>
                                                            <td>{cartgood.Qty}</td>
                                                            <td>{"$" + cartgood.Price}</td>
                                                            <td>{"$" + cartgood.Price * cartgood.Qty}</td>
                                            
                                                        </tr>
                                                    
                                                    
                                                    
                                                    )

                                                    
                                                    }
                                                </tbody>        
                                            
                                        </table>
                                        <div className="col-sm-4 pull-right" >
                                            <h4 className="text-success">Total Amount:<span style={{color:"#4a0807",fontSize:"20px"}}> {"$"+ Total}</span></h4>
                                            <button onClick={this.onDownload.bind(this)}className="btn btn-success btn-xs">Download Invoice</button>
                                        </div>
                                        
                                </div>
                                
                            </div>        
                            
                    </div>        
        
                    
                </div>
    
            )
    }
}

    function mapStateToProps(state, ownProps) {
        
        return {
            invoiceInfo:state.invoiceInfo,
            cart: state.cart
        };
    }

    function mapDispatchToProps(dispatch) {  
        return {
                    actions:bindActionCreators(invoiceActions, dispatch)
                    
                }
            }
            
export default connect(mapStateToProps,mapDispatchToProps) (InvoicePage);
