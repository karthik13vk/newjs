var popoverlay = document.querySelector(".popupoverlay")
var popbox = document.querySelector(".popupbox")
var popupbtn = document.getElementById("addpopupbtn")

popupbtn.addEventListener("click", function(){
    popoverlay.style.display="block"
    popbox.style.display="block"
})

// select cancel btn
var canclebtn = document.getElementById("cancelbook")

canclebtn.addEventListener("click", function(event){
    event.preventDefault()
      popoverlay.style.display="none"
    popbox.style.display="none"
})

// select contaner, addbtn, booktitle, bookdetails
var containerbox = document.querySelector(".container") 
var  bookadd = document.getElementById("addbook")
var  titlebook = document.getElementById("booktitleinput")
var  autorbook = document.getElementById("bookauthorinput")
var  descbook = document.getElementById("bookdescinput")

bookadd.addEventListener("click", function(event){
    event.preventDefault()
    var div= document.createElement("div")
    div.setAttribute("class", "bookcontainer")
    div.innerHTML=`
    <h2>${titlebook.value}</h2>
    <h5>${autorbook.value}</h5>
    <p>${descbook.value}</p>
     <button onclick="deletebook(event)">Delete</button>
    `;
   
    containerbox.append(div)
    titlebook.value = "";
    autorbook.value = "";
    descbook.value = "";
     popoverlay.style.display="none"
    popbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}