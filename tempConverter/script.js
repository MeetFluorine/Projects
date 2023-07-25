let input= document.querySelector("#input");
let type = document.querySelector("#unit");
let display = document.querySelector("#display");

function temperature(){
    if(type.value== "Celsius"){
        let C= input.value;
        let F= (C * (9/5))+ 32;
        if(!Number.isInteger(F)){
            F= F.toFixed(2);
        }

        display.innerHTML=F+"&deg;F";
        
    }
    else if(type.value== "Fahrenheit"){
        let F= input.value;
        let C = (F-32)*5/9;
        if(!Number.isInteger(C)){
            C= C.toFixed(2);
        }
        display.innerHTML=C+"&deg;C";
    }
    else{
        alert("Enter a valid value and Type");
    }
}

window.addEventListener('keyup',function(event){
    if(event.key=="Backspace"){
           var result= display.innerText;
          result= result.substr(0,result.length-1);
          display.innerText= result;
          if(display.innerText.length == 0){
            input.value = "";
            type.value= "none";
          }
          if (input.value.length==0){
            display.innerText="";
            type.value="none";

          }
    }

    if(event.key=="Delete"){
        display.innerText="";
        input.value="";
        type.value="none"
    }
    if(event.key=="Enter"){
        temperature();
    }
})



// to prevent the inspect

document.addEventListener('contextmenu', 
     event => event.preventDefault()
);


document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
       event.preventDefault();
    }
    if(event.keyCode == 123){
       event.preventDefault();
    }
});