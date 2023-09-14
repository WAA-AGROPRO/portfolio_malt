import "./CardAvis.scss"

function CardAvis(props) {
  return (
    <div className="card-avis norm">
		    <div className="card-avis__top">
                <p className="card-avis__maintxt">
                    {props.txt}
                </p>
            </div>
			<div className="card-avis__bottom">
			<img src={props.img} className="card-avis__img"/>
				<div className="card-avis__legend">
					<span className="card-avis__name">{props.name}</span>
				    <p className="card-avis__metier">{props.metier}</p>
				</div>
			</div>
    </div>
  )
}

export default CardAvis