const cellsCollection = document.querySelectorAll('.cell');
const cellsParent = document.querySelector('.cells');
const cellsHeader = document.querySelector('.cells-header');
const secondScreen = document.querySelector('.screen-2');
const thirdScreen = document.querySelector('.screen-3');
const btn = document.getElementById('cells-header__btn');
const btnReset = document.getElementById('btn-reset');
let clickCounter = 0;
let selectChange = document.querySelectorAll('input[name="change"]');


// меняем класс клеток для отображения крестика или нолика
cellsCollection.forEach(function(item) {
  item.addEventListener('click', (e)=> {
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

    // условие победы крестика или нолика
    function checkWin(cellsParent_1, cellsParent_2, cellsParent_3, cellClass) {
      if(cellsParent_1.classList.contains(cellClass) && cellsParent_2.classList.contains(cellClass) && cellsParent_3.classList.contains(cellClass)) {
        setTimeout(() => {
          secondScreen.classList.remove('screen-2_active');
          secondScreen.style.height = '0';
          secondScreen.style.width = '0';
        }, 1000)
       
        setTimeout(() => {
          const resultOutput = document.querySelector('.screen-3__output');
          if(cellClass=='round') {
            resultOutput.innerHTML = `Победили <span class='text_green'>нолики!</span>`;
          } else if(cellClass=='cross') {
            resultOutput.innerHTML = `Победили <span class='text_red'>крестики!</span>`;
          }
          
          thirdScreen.classList.add('screen-3_active')
        }, 2000);
        
      }
    }

    checkWin(cellsParent.children[0], cellsParent.children[1], cellsParent.children[2], 'round')
    checkWin(cellsParent.children[0], cellsParent.children[4], cellsParent.children[8], 'round')
    checkWin(cellsParent.children[0], cellsParent.children[3], cellsParent.children[6], 'round')
    checkWin(cellsParent.children[1], cellsParent.children[4], cellsParent.children[7], 'round')
    checkWin(cellsParent.children[2], cellsParent.children[5], cellsParent.children[8], 'round')
    checkWin(cellsParent.children[3], cellsParent.children[4], cellsParent.children[5], 'round')
    checkWin(cellsParent.children[6], cellsParent.children[7], cellsParent.children[8], 'round')
    checkWin(cellsParent.children[2], cellsParent.children[4], cellsParent.children[6], 'round')

    checkWin(cellsParent.children[0], cellsParent.children[1], cellsParent.children[2], 'cross')
    checkWin(cellsParent.children[0], cellsParent.children[4], cellsParent.children[8], 'cross')
    checkWin(cellsParent.children[0], cellsParent.children[3], cellsParent.children[6], 'cross')
    checkWin(cellsParent.children[1], cellsParent.children[4], cellsParent.children[7], 'cross')
    checkWin(cellsParent.children[2], cellsParent.children[5], cellsParent.children[8], 'cross')
    checkWin(cellsParent.children[3], cellsParent.children[4], cellsParent.children[5], 'cross')
    checkWin(cellsParent.children[6], cellsParent.children[7], cellsParent.children[8], 'cross')
    checkWin(cellsParent.children[2], cellsParent.children[4], cellsParent.children[6], 'cross')
  })
})

// ставим выбор кнопки radiobutton по умолчанию при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  selectChange = 'round';
})

// выбираем кем начнем играть
selectChange.forEach((radio) => {
  radio.addEventListener('change', function() {
    if (this.checked) {
      selectChange = this.id; 
    }
  });
});

// переход к игре
btn.addEventListener('click', function(e) {
  e.preventDefault();

  secondScreen.classList.add('screen-2_active');
  cellsHeader.classList.add('hide');
})

// кнопка сброса для игры сначала
btnReset.addEventListener('click', function(e) {
  e.preventDefault();

  secondScreen.classList.remove('screen-2_active');
  clickCounter = 0;
  cellsCollection.forEach(function(cell) {
    cell.classList.remove('round');
    cell.classList.remove('cross');
    cell.style.pointerEvents = 'auto';
  })

  cellsHeader.classList.remove('hide');
})