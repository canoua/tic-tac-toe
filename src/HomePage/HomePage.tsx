import './HomePages.css'

function HomePage() {
  return (
    <>
      <div className="screen-1">
        <form action="" className="cells-header">
          <h1 className="cells__title">Кто ходит первым?</h1>
          <img className="cells-header__bg" src="1.jpg" alt="bg" />
          <div className="cells__type-wrapper">
            <div className="cells__type">
              <label htmlFor="round">Нолики</label>
              <input name="change" id="round" type="radio" checked />
            </div>
            <div className="cells__type">
              <label htmlFor="cross">Крестики</label>
              <input name="change" id="cross" type="radio" />
            </div>
          </div>

          <button className="btn" type="submit" id="cells-header__btn">играть</button>
        </form>
      </div>
    </>
  )
}

export default HomePage