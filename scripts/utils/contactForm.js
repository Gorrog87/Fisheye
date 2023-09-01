const modal = document.getElementById("contact_modal");
const body = document.getElementById("body");


function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.addEventListener("click", function(event){
    if (event.target == modal) {
        modal.style.display = 'none';
    }
    // console.log(event.target);
})


window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
  })
  
