import { useState, useEffect } from "react"
import "./Faq.scss"
import QuestionReponse from "../../components/QuestionReponse/QuestionReponse"
import axios from "axios"

function Faq() {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        axios.get("faq.json")
            .then((res) => {
                setFaqs(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

  return (
    <div className="faq">
        <div className="faq__title">
            FAQ
        </div>
        <div className="faq__questions">
            {faqs.map(faq => (
                <QuestionReponse key={faq.id} faq={faq} />
            ))}
        </div>
    </div>
  )
}

export default Faq