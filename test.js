document.getElementById('add-btn').addEventListener("click", function(){
    const value = document.getElementById("text-input").value;
    const container = document.getElementById("parent-container");
    const li = document.createElement('li');
    li.innerText = value;
    li.classList.add("new-li");
    container.appendChild(li);
    const allList = document.getElementsByClassName("new-li");
    for(const item of allList){
        item.addEventListener("click", function(e){
        e.target.parentNode.removeChild(e.target);
    });
  }
});

// document.getElementById("p-1").innerText = "hello-1";
// document.getElementById("p-2").innerText = "hello-1";
// document.getElementById("p-3").innerText = "hello-1";
// document.getElementById("p-4").innerText = "hello-1";


document.getElementById("hit").addEventListener("click", function(){
    
 setInnerText("p-1", "Saudi");
 setInnerText("p-2", "Australia");
 setInnerText("p-3", "Finland");
 getInputValue("text-input");
    
});
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
};
function getInputValue(id){
    const value = document.getElementById(id).value;
    return value;
};
