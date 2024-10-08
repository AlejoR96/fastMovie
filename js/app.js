const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementById("closeModalBtn");

// Open modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Close modal
span.onclick = function() {
    modal.style.display = "none";
}

// close modal out content 
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}