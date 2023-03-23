
/* *********************************
ENCRYPTION
**************************************/ 

const key = "U2FsdGVkX1942An3uWjzrAu0RRApwtJg4lRTCTFaOL";


/* function encrypt(text) {
    let ciphertext = CryptoJS.AES.encrypt(text, key);    // a activer pour besion de crypter mdp 
    return ciphertext.toString();
}*/
 
function decrypt(encryptedText) {
    let bytes = CryptoJS.AES.decrypt(encryptedText, key);
    let decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
}
  




/*   let text = 'matt.colombin.pro@gmail.com';
  let encryptedText = encrypt(text);
  console.log(encryptedText);
  console.log(decrypt(encryptedText));

*/

/* *********************************
MAIL MANAGEMENT
**************************************/ 

function sendmail(msg){
    Email.send({
        SecureToken : "24c21e61-dc12-4231-8dfc-e8bc7e6801b5",
        To : decrypt('U2FsdGVkX1+tfLHsK4M6wCR8G2tIXpVf+htniLkyIvRH6zEyy0EBel7xS+mjIvEoNunLQi/PGso8ToADN6Ve8OyzasV1lenzt5Aq4AzyULvEziAaKoacK2ynlH/3GbvYGU/DT/gz1qqeSrD46yFU1g=='),     /*rajout d'email ajoute une virgule*/
        From : "matt.colombin.sc@gmail.com",
        Subject : "NEW REQUEST",
        Body : msg
    }).then(
   // message => alert(message)
    );
}

console.log();


function getMsg(){
    var name =  $('#name').val();

    var mail = $('#email').val();

    var phone = $('#phone').val();

    var message =$('#message').val();

    var msg =  '<br> Nom </br> : '+name + '<br> Mail </br> : ' + mail + '<br>  Phone </br>: ' + phone +  '<br> Message </br> : ' + message;
      
    return msg;

}



    $("#submitButton").click(function(){

        var msgTxt = getMsg(); 
        console.log(msgTxt);
        sendmail(msgTxt);

    }); 





/////////////////////
 

