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

var caseCreator = {

   "Captain": [
      "How to join Happygo as a Driver",
      "Driver Account Activation Request",
      "Driver Account Deactivation Request",
      "Document Change Request",
      "Mobile Number change Request",
      "Unable to Login to HappyGo Driver Account",
      "I need help to register as a captain",
      "Other"
   ],
   "Rider": [
      "Driver Behaviour",
      "Account Activation/Deactivation Request",
      "Driver Appreciation",
      "Ride Fare Related",
      "Collaboration",
      "Ride Payment Related",
      "Unable to Login",
      "Unable to request ride",
      "Other"
   ]
},

caseDefaultOption = new Option("--None--", "");

window.onload = function () {

   var caseCreatorSel = document.getElementById("00N2w00000XvKgf");
   var caseOptionSel = document.getElementById("00N2w00000ZyLi1");
   caseOptionSel.style.display = "None";

   for (var x in caseCreator) {
      caseCreatorSel.options[caseCreatorSel.options.length] = new Option(x, x);
   }

   caseCreatorSel.onchange = function () {

      caseOptionSel.length = 0;
      caseOptionSel.options.add(caseDefaultOption);
      if (this.value === "") {

         caseOptionSel.style.display = "None";
         caseOptionSel.options.remove(caseDefaultOption);

      } else {;
         caseOptionSel.style.display = "block";
         for (var y in caseCreator[this.value]) {
            console.log(y)
            caseOptionSel.options.add(new Option(caseCreator[this.value][y], caseCreator[this.value][y]));
         }
      }

   }
}