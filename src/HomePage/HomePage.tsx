import './HomePages.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function HomePage() {
  //option1 ставим по умолчанию
  const [selectedRadio, setRadio] = useState('option1'); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(event.target.value);
  };

  const navigate = useNavigate();

  function toGamePage(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    navigate('/game')
  }
  
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
          <nav>
            {/* <Link to="/">играть</Link>  */}
            {/* <Link to="/about">О проекте</Link> */}
          </nav>
          {/* <Routes> */}
            {/* <Route path="/" element={<Game />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* Этот маршрут сработает, если ничего не подошло */}
            {/* <Route path="*" element={<NotFound />} /> */}
          {/* </Routes> */}
          <button onClick={toGamePage} className="btn" type="submit" id="cells-header__btn">играть</button>
        </form>
      </div>
    </>
  )
}

export default HomePage