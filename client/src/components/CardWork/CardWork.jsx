import "./CardWork.scss"

const CardWork = ({ work }) => {
  return (
    <div className="cardwork">
        <section className="cardwork__left">
          <img src={work.image} alt="image" className="cardwork__img" />
        </section>
        <section className="cardwork__right">
          <div className="cardwork__card">
            <div className="cardwork__card__left">
             </div>    
            <div className="cardwork__card__right">
              <h2 className="cardwork__title">{work.title}</h2>
              <div className="cardwork__classement">
                {work.type}
              </div>
            </div>
          </div>    
         
        </section>
    </div>
  )
}

export default CardWork