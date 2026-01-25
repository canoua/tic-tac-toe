import './HomePages.css'
import { useState } from 'react'

function HomePage() {
  //option1 ставим по умолчанию
  const [selectedRadio, setRadio] = useState('option1'); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(event.target.value);
  };
  
  return (
    <>
      <div className="screen-1">
        <form action="" className="cells-header">
          <h1 className="cells__title">Кто ходит первым?</h1>
          <img className="cells-header__bg" src="1.jpg" alt="bg" />
          <div className="cells__type-wrapper">
            <div className="cells__type">
              <label htmlFor="round">Нолики</label>
              <input 
                name="change" 
                id="round" 
                type="radio" 
                value="option1"
                checked={selectedRadio==='option1'} 
                onChange={handleChange}
              />
            </div>
            <div className="cells__type">
              <label htmlFor="cross">Крестики</label>
              <input 
                name="change" 
                id="cross" 
                value="option2"
                type="radio" 
                checked={selectedRadio==='option2'} 
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="btn" type="submit" id="cells-header__btn">играть</button>
        </form>
      </div>
    </>
  )
}

export default HomePage