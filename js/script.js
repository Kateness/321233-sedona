var buttn = document.querySelector(".hotel-search");
var popup = document.querySelector(".popup-search");
var close = document.querySelector(".hotel-search-close");
var form = popup.querySelector("form");
var movein = popup.querySelector("[name=movein]");
var moveout = popup.querySelector("[name=moveout]");
var adults = popup.querySelector("[name=adults]");
var kids = popup.querySelector("[name=kids]");
var adultdata = localStorage.getItem("adults");
var kidsdata = localStorage.getItem("kids");
    
    
buttn.addEventListener("click",function(event) {
        event.preventDefault();
        popup.classList.add("popup-search");
        popup.classList.toggle("hotel-search-close");
        

    });
    
  
        
form.addEventListener("submit",function(event) {
    if  (!movein.value || !moveout.value || !adults.value || !kids.value) {
             event.preventDefault();
             console.log ("Нужно ввести данные для поиска");
             popup.classList.add("popup-search-error");
     } else {
             localStorage.setItem("adults", adults.value);
             localStorage.setItem("kids", kids.value);
         }
         
         });
