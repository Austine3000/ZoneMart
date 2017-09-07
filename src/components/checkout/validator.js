import validator from 'validator';
import isEmpty from 'lodash/isEmpty';
//import isEmail from 'validator/lib/isEmail';

  export default function validateUserInput(userDatas){

    let dErrors={};
    
    if(validator.isNull(userDatas.name)){
        dErrors.name= 'Username is required';
    }
    if(validator.isNull(userDatas.phone)){
        dErrors.phone = 'Phone number is required';
    }

    if(!validator.isNull(userDatas.payment)){
        dErrors.payment = 'select a Payment Mode';
    }

    if(!validator.isNull(userDatas.address)){
        dErrors.address = 'Enter Your Address';
    }
    return{

        dErrors, 
        errorCheck : isEmpty(dErrors) //i think isEmpty is checking if no error is inside the dErrors Object and returns boolean
    }


}
