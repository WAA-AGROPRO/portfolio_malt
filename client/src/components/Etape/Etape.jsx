
import "./Etape.scss"

function Etape(props) {
  return (
      <div className="feature">
            <div className="feature-inner">
                <div className="feature-icon">
            <img src={props.img} alt="Feature 01" />
            </div>
                <h4 className="feature-title">{props.title}</h4>
                <p className="feature-text">{props.text}</p>
            </div>
        </div>
  )
}

export default Etape