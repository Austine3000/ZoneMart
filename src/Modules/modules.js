export  function capitalise(str){
    let letterNew, letter;

    letter = str.substr(0,1);
    letterNew = letter.toUpperCase();
    return str.replace(letter, letterNew);
}

        
        
export   function hide(){

       
        return document.getElementById("searchDiv").style.display="none";

   }

export  function show(){

        
        return document.getElementById("searchDiv").style.display="block";

 }


 