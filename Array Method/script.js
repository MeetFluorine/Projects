let arr = ["apple", "mango", "litchi", "orange", "grapes", "blackberry"];

let display = document.querySelector(".array");

display.innerHTML = arr;

function popValue(){
    arr.pop()
    display.innerHTML =arr;
}
function sortValue(){
    var x= arr.sort()
    display.innerHTML= x;
}
function reverseValue(){
    var x= arr.reverse();
    display.innerHTML= x;

}

function pushValue(){
    var x= prompt("enter value to push:-");
    arr.push(x);
    display.innerHTML = arr;
}
function shiftValue(){
    arr.shift()
    display.innerHTML = arr;
}
function unshiftValue(){
    var x= prompt("enter value to push:-");
    arr.unshift(x);
    display.innerHTML = arr;
}

function sliceValue(){
    var x = prompt("enter from where to:-");
    var y = prompt("enter till where value you want:- ")
    var z= arr.slice(x,y);
    display.innerHTML= z;
}

function spliceValue(){
    var x = prompt("enter index where you want to insert:-");
    var y = prompt("Do you want to delete existed element(0/1):-")
    var z= prompt("enter value to push:-");
    var  a=arr.slice(x,y,z);
    console.log(a);
    display.innerHTML = arr;
}