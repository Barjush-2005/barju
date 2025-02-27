
var change = document.querySelector("p");
var addmenu = document.querySelector("#add1");

addmenu.addEventListener("click", function() {
    if (change.style.color !== "white") {
        change.style.color = "white";
        change.style.background = "black";
    } else { 
        change.style.color = "black";
        change.style.background = "white"; 
    }
});