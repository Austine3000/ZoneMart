import * as types from './type';


export function invoiceDetails(details) {
    return { type: types.INVOICE_DETAILS, details};
}
export function downloadInvoice(name,userTypo) {
    return { type: types.DOWNLOAD_INVOICE,name,userTypo};
}