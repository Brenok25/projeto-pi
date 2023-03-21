document.addEventListener('DOMContentLoaded', function() {
    const redBox = document.querySelector('.box.red');
    redBox.style.display = 'none';
  });
  
  const buttons = document.querySelectorAll('.button-change');
  const blueBox = document.querySelector('.table_docente');
  const redBox = document.querySelector('.table_admin');
  
  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      buttons.forEach((button) => {
        button.classList.remove('active');
      });
      this.classList.add('active');
      const color = this.getAttribute('data-color');
      if (color === 'orange') {
        blueBox.style.display = 'block';
        redBox.style.display = 'none';
      } else if (color === 'gray') {
        blueBox.style.display = 'none';
        redBox.style.display = 'block';
      }
    });
  });
  

// ========================================================================

// modais

var modal = document.querySelector(".modal-cad-user");
var open_modal = document.querySelector(".open_modal");
var closeButton = document.querySelector(".close-button");
var changeOpacidad = document.querySelector(".navega-color");


// essa function é pura gambiarra, mas sem tempo irmão
function backgroundChange(){
  changeOpacidad.classList.remove("navega-change")
}

function toggleModal() {
    modal.classList.toggle("show-modal");
    changeOpacidad.classList.add("navega-change")

}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
        changeOpacidad.classList.remove("navega-change")
    }
}

open_modal.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", backgroundChange)
window.addEventListener("click", windowOnClick);



