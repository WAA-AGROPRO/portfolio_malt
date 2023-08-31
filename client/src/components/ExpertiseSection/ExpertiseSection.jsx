import "./ExpertiseSection.scss"

function ExpertiseSection(props) {
  return (
    <div className="expertise-section">
        <img className="expertise-section__img" src={props.img} alt={props.alt} />
        <h3 className="expertise-section__title">{props.title}</h3>
        <p className="expertise-section__description">{props.description}</p>
        <button className="expertise-section__button">En savoir plus</button>  
    </div>
  )
}

export default ExpertiseSection