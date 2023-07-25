let textBox= document.querySelector("#textbox");

textBox.addEventListener('input',function(){

    var text= this.value;
    let char = document.querySelector("#char");
        char.innerHTML = text.length;

    text = text.trim();

    

    let words = text.split(" ");
    let clean = words.filter(function(event){
        return event != "";
    });
    document.querySelector("#word").innerHTML = clean.length;
});

// document.addEventListener('contextmenu', 
//      event => event.preventDefault()
// );


// document.addEventListener("keydown", function (event){
//     if (event.ctrlKey){
//        event.preventDefault();
//     }
//     if(event.keyCode == 123){
//        event.preventDefault();
//     }
// });