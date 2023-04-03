function ValidateForm() {

    var helperMsg = '';
    if (document.getElementById('name').value.length == 0) {
       helperMsg += "Please enter Name \n\r";
    } 
    if (document.getElementById('email').value.length == 0) {
       helperMsg += "Please enter Email \n\r";
    } 
    if (document.getElementById('phone').value.length == 0) {
       helperMsg += "Please enter Phone \n\r";
    } 
            

    if (helperMsg.length > 0) {
       alert(helperMsg); return false;
    }
    return true;
 }