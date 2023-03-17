$("#accordion-dob").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find("i:last-child")
    .toggleClass("bi-minus-square-fill bi-plus-square-fill");
});

//add hover class to selected list
let list = document.querySelectorAll(".navigation li");

function activelink(){
  list.forEach((item)=>{
    item.classList.remove(hovered);
  })
  this.classList.add(hovered)
}

list.forEach(item=> item.addEventListener("mouseover", activelink))