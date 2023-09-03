function changeWorkView() {

   const riders_section = document.getElementById("riders_section");
   const riders_section1 = document.getElementById("riders_section1");
   const riders_section2 = document.getElementById("riders_section2");
   const captains_section = document.getElementById("captains_section");
   const captains_section1 = document.getElementById("captains_section1");
   const captains_section2 = document.getElementById("captains_section2");

   riders_section.style.display = riders_section.style.display == "block" ? "None" : "block";
   riders_section1.style.display = riders_section1.style.display == "block" ? "None" : "block";
   riders_section2.style.display = riders_section2.style.display == "block" ? "None" : "block";
   captains_section.style.display =  captains_section.style.display == "block" ? "None" : "block";
   captains_section1.style.display =  captains_section1.style.display == "block" ? "None" : "block";
   captains_section2.style.display =  captains_section2.style.display == "block" ? "None" : "block";
  

 }

 
 window.onload = function () {
 
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
   
    
 }