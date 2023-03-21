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


