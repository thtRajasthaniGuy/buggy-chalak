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

   const riders_section = document.getElementById("riders_section");
   const riders_section1 = document.getElementById("riders_section1");
   const riders_section2 = document.getElementById("riders_section2");
   const captains_section = document.getElementById("captains_section");
   const captains_section1 = document.getElementById("captains_section1");
   const captains_section2 = document.getElementById("captains_section2");
   riders_section.style.display = "block";
   riders_section1.style.display = "block";
   riders_section2.style.display = "block";
   captains_section.style.display = "None";
   captains_section1.style.display = "None";
   captains_section2.style.display = "None";

   countboxvalfunction();
}


function changeWorkView(id) {

   const riders_section = document.getElementById("riders_section");
   const riders_section1 = document.getElementById("riders_section1");
   const riders_section2 = document.getElementById("riders_section2");
   const captains_section = document.getElementById("captains_section");
   const captains_section1 = document.getElementById("captains_section1");
   const captains_section2 = document.getElementById("captains_section2");
   if (id !== 'riders_btn') {
      riders_section.style.display = "None";
      riders_section1.style.display = "None";
      riders_section2.style.display = "None";
      captains_section.style.display = "block";
      captains_section1.style.display = "block";
      captains_section2.style.display = "block";
   } else  {
      riders_section.style.display = "block";
      riders_section1.style.display = "block";
      riders_section2.style.display = "block";
      captains_section.style.display = "None";
      captains_section1.style.display = "None";
      captains_section2.style.display = "None";
   }
}

function countboxvalfunction() {
   
   document.getElementById("count_box_val1").innerHTML = Math.floor((Math.random() * 100000) + 1) + ' +';
   document.getElementById("count_box_val2").innerHTML = Math.floor((Math.random() * 100000) + 1) + ' +';
   document.getElementById("count_box_val3").innerHTML = Math.floor((Math.random() * 100000) + 1) + ' +';
   document.getElementById("count_box_val4").innerHTML = Math.floor((Math.random() * 100000) + 1) + ' +';
   
}