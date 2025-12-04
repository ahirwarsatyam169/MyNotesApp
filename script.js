const createbtn = document.querySelector("#create-btn");
const deletebtn = document.querySelector("#delete-img");;
let notes = document.querySelectorAll(".input-box");
const notescontainer = document.querySelector(".notes-container");
function showNotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage(){
    localStorage.setItem("notes", notescontainer.innerHTML)
}
showNotes();

createbtn.addEventListener("click", function(){
    let newnote = document.createElement("p");
    let img = document.createElement("img");
    newnote.className = "input-box";
    newnote.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";
    notescontainer.appendChild(newnote).appendChild(img);

})

notescontainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName ==="P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }

} )

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }

})