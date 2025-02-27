var change=document.querySelector("h2")
var imgchange=document.querySelector("#img")
var addmenu=document.querySelector("#add1")
var removemenu=document.querySelector("#remove1")
addmenu.addEventListener("click",function()
{
    change.innerHTML="lunch"
    change.style.color="pink"
    imgchange.src="food/image.png"
}
)
removemenu.addEventListener("click",function()
{
    change.innerHTML="dinner"
    change.style.color="red"
    imgchange.src="image/green/images.jpg"
}
)
