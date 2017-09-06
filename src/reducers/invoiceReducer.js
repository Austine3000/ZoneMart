import * as types from '../actions/type';


let Initialstate = {
    name:"",phone:"",paymode:"",address:""
}

export default function invoiceReducer(state=Initialstate, action) {
    switch (action.type) {

        case types.INVOICE_DETAILS:
             return Object.assign({},action.details);

        case types.DOWNLOAD_INVOICE:

            var pdf = new jsPDF();
            pdf.text(10, 10, action.userTypo);
            pdf.save(`${action.docname}.pdf`);

            //let data = s2ab(action.pdf);
            //fileSaver.saveAs(new Blob([action.pdf], {type: "application/pdf;charset=utf-8"}), `${action.docname}.pdf`);
             
            return state;
        default:
            return state;
    }
}
