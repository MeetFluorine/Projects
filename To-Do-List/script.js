let input= document.querySelector("#write");
let btn= document.querySelector("#add");
let list= document.querySelector("#list");

function append(){
    if(input.value==""){
        alert("add task first...")
    }
    else{
        var li = document.createElement("li");
        var btn= document.createElement("button");
        btn.textContent="del";
        li.innerHTML=input.value;
        li.appendChild(btn);
        list.appendChild(li);

        btn.addEventListener('click',function(){
            
        })
        
    }
    input.value="";
}