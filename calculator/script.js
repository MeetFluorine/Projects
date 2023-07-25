let result = document.getElementById("d");
function appendValue(value){
    if(result.value==0){
      result.value="";
      // result.value+=value;
    }
    result.value+=value;
}
function calculate(){
  if(result.value.length == 0){
    result.value= "";
  }
  else{
    result.value=eval(result.value);

  }
}
function clearResult(){
    result.value="0";
}
function clearOne(){
    var result= document.getElementById("d").value;
     result= result.substr(0,result.length-1);
     document.getElementById("d").value= result;
     if(document.getElementById("d").value.length==0){
      document.getElementById("d").value=0;
     }
  } 


window.addEventListener('keydown',function(event){
    if(event.key >=0 && event.key<=9 || event.key=="+" || event.key=="-" || event.key=="*" || event.key=="/" || event.key=="%" || event.key=="."){

      if(result.value==0){
        result.value="";
        // result.value+=value;
      }
      result.value += event.key;
  }
  else if(event.key =="Enter"){
    calculate();
  }
  else if(event.key == "Backspace"){
    clearOne();
  }
  else if(event.key=="Delete"){
    clearResult();
  }
})