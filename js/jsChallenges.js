
// using query selector because we may not always have an ID we can get from an object
document.getElementById("subscribe").addEventListener("click", function(){
    console.log("Hi")



    if(this.checked){
        document.getElementById("emailDiv").style.display="block";
    }

    else{
        document.getElementById("emailDiv").style.display="none"
    }
});
    
    document.addEventListener("click", function(){
        let currentTime = new Date();
        alert(currentTime);
});


