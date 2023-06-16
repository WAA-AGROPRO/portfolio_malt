
import "./Card.scss"


function CardProject(props) {
  return (
    <div className="cardprojects">
            <div className="cardprojects__photo">
                <img src={props.img} alt="img" className="cardprojects__img" />
            </div>
            <div className="cardprojects__text">
                <h2 className="cardprojects__title">{props.title}</h2>
                <h3 className="cardprojects__subtitle">{props.subtitle}</h3>
            </div>
    </div>
  )
}

export default CardProject