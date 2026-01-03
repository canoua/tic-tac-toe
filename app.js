const cells = document.querySelectorAll('.cell');
const cellsHeader = document.querySelector('.cells-header');
const cellsWrapper = document.querySelector('.cells');
const btn = document.getElementById('cells-header__btn');
let clickCounter = 0;
let checkedClick = false;

// let selectedColor = document.querySelector('input[name="color"]:checked');
// input[name="color"]: Выбирает все input элементы с атрибутом name="color"


cells.forEach(function(item) {
  item.addEventListener('click', function(e) {
    clickCounter++;
    if(clickCounter%2==1) {
      e.target.classList.add('round');
      e.target.style.pointerEvents = 'none';
    } else {
      e.target.classList.add('cross');
      e.target.style.pointerEvents = 'none';
    }
    
    if(clickCounter <= 9) {
      console.log(clickCounter);
    }
  })
})

btn.addEventListener('click', function(e) {
  e.preventDefault();
  cellsWrapper.classList.add('cells_active');
  console.log(cellsHeader);
  
  cellsHeader.classList.add('hide');
})