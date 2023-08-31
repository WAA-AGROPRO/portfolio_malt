
import "./QuestionReponse.scss"

const QuestionReponse = ({ faq }) => {
    return (
        <div className="question-reponse">
            <div className="tabs">
                <div className="tab">
                    <input type="radio" id={faq.id} name="faq" />
                    <label className="tab-label" htmlFor={faq.id} >{faq.question}</label>
                    <div className="tab-content">
                        {faq.reponse}
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default QuestionReponse