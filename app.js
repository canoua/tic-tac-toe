const cells = document.querySelectorAll('.cell');
const cellsHeader = document.querySelector('.cells-header');
const secondScreen = document.querySelector('.screen-2');
const btn = document.getElementById('cells-header__btn');
const btnReset = document.getElementById('btn-reset');
let clickCounter = 0;
let selectChange = document.querySelectorAll('input[name="change"]');

cells.forEach(function(item) {
  item.addEventListener('click', function(e) {
    clickCounter++;
    if(selectChange=='round') {
      if(clickCounter%2==1) {
        e.target.classList.add('round');
        e.target.style.pointerEvents = 'none';
      } else {
        e.target.classList.add('cross');
        e.target.style.pointerEvents = 'none';
      }
    } else if(selectChange=='cross') {
      if(clickCounter%2==1) {
        e.target.classList.add('cross');
        e.target.style.pointerEvents = 'none';
      } else {
        e.target.classList.add('round');
        e.target.style.pointerEvents = 'none';
      }
    }
    
    if(clickCounter <= 9) {
      console.log(clickCounter);
    }
  })
})

document.addEventListener('DOMContentLoaded', function() {
  selectChange = 'round';
})

selectChange.forEach((radio) => {
  radio.addEventListener('change', function() {
    if (this.checked) {
      selectChange = this.id; 
    }
  });
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
  secondScreen.classList.add('screen_active');
  
  cellsHeader.classList.add('hide');
  console.log(selectChange);
})

btnReset.addEventListener('click', function(e) {
  e.preventDefault();

  secondScreen.classList.remove('screen_active');
  clickCounter = 0;
  cells.forEach(function(cell) {
    cell.classList.remove('round');
    cell.classList.remove('cross');
    cell.style.pointerEvents = 'auto';
  })
  
  cellsHeader.classList.remove('hide');
})