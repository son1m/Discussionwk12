

// js from last week 
// function challenge2(element){
//     if(element.checked){
//       document.getElementById("bill").innerHTML = "home";
//     }
    
//     else{
//       none;
//     }
//   }

  document.querySelector("#sameAddress").addEventListener("click", function(){
    console.log("this works")

    let bill = document.querySelector('#bill')
    let home = document.querySelector('#home')

    if(this.checked){

        home.value=bill.value;

        home.disabled=true;

    }

    else{

        home.value = ""

        home.disabled = false

    }

})