import validator from 'validator';
import isEmpty from 'lodash/isEmpty';
//import isEmail from 'validator/lib/isEmail';

  export default function validateSignUpInput(userDatas){

    let dErrors={};
    
    if(validator.isNull(userDatas.username)){
        dErrors.username = 'Username is required';
    }
     if(userDatas.password.length < 8   ){
        dErrors.password = 'Password must be at least 8 character long';
    }

    if(!validator.isEmail(userDatas.email)){
        dErrors.email = 'Enter a Valid Email';
    }

    return{

        dErrors,// 
        errorCheck : isEmpty(dErrors) //i think isEmpty is checking if no error is inside the dErrors Object and returns boolean
    }


}




  

