import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as invoiceActions from '../../actions/invoiceActions'; 
import * as loginActions  from '../../actions/loginActions';

class InvoicePage extends React.Component {
     constructor(props, context) {
        super(props, context)
        this.clearState = this.clearState.bind(this);
    }

    clearState() {
        this.props.actions.clearData();
        this.context.router.push('/');
    }

   	
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

            const {name,phone,paymode,address,address2,city}= this.props.invoiceInfo;

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

                <div className="container-fluid">
                    <div className="container col-sm-offset-2" style={{marginTop:"20px"}}>
                            <div className="row">

                                <h4 style={{color:"#192eef"}}>Customer Details </h4>
                                <div className="col-sm-6" >
                                    
                                    <p className="h6">Name :   <span className="h5 capital" style={{color:"#801c23"}}>{name}</span></p>
                                    <p className="h6">Phone Number :    <span className="h5" style={{color:"#801c23"}}>{phone}</span>         </p>
                                    <p className="h6">Mode of Payment : <span className="h5" style={{color:"#801c23"}}>{paymode}</span>            </p>
                                    
                                </div>
                                <div className="col-sm-6" >
                                    <p className="h6"> City: <span style={{color:"#801c23"}} className="addressdiv h5">{city}</span></p>
                                    <p className="h6"> Shipping Address 1: <span style={{color:"#801c23"}} className="addressdiv  h5">{address}</span></p>
                                    <p className="h6"> Shipping Address 2: <span style={{color:"#801c23"}} className="addressdiv h5">{address2}</span></p>
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
                                                            <td>&#8358;{cartgood.Price}</td>
                                                            <td>&#8358;{cartgood.Price * cartgood.Qty}</td>
                                            
                                                        </tr>
                                                    
                                                    
                                                    
                                                        )   
                                                    }
                                                </tbody>        
                                            
                                        </table>
                                        <div className="col-sm-8 pull-right" >
                                            <h4 className="text-success">Total Amount:<span style={{color:"#4a0807",fontSize:"20px"}}>&#8358;{Total}</span></h4>
                                            <button type="button" onClick={this.onDownload.bind(this)}className="btn btn-success spacingRyt">Download Invoice</button>
                                            <button type="button" onClick={() => this.clearState()} className="btn btn-primary">Finish</button>
                                        </div>
                                </div>
                                
                            </div>        
                            
                    </div>        
        
                    
                </div>
    
            )
    }
}

InvoicePage.propTypes = {
    actions: React.PropTypes.object.isRequired
};

InvoicePage.contextTypes = {
    router: PropTypes.object
}

    function mapStateToProps(state, ownProps) {
        
        return {
            invoiceInfo:state.invoiceInfo,
            cart: state.cart
        };
    }

    function mapDispatchToProps(dispatch) {  
        return {
            actions: bindActionCreators(Object.assign({}, loginActions, invoiceActions), dispatch)          
            }
        }
            
export default connect(mapStateToProps,mapDispatchToProps) (InvoicePage);
