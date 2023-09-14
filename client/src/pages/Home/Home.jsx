
import About from "../../layout/About/About"
import Expertise from "../../layout/Expertise/Expertise"
import Hero from "../../layout/Hero/Hero"
import Faq from "../../layout/Faq/Faq"
import { useState, useEffect } from "react"
import axios from "axios"
import ArticleBlog from "../../components/ArticleBlog/ArticleBlog"
import Avis from "../../layout/Avis/Avis"
import "./Home.scss"
function Home() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("articles.json")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  , []);


  return (
    <div className="home">
        <Hero />
        <Expertise />
        <About />
        <Faq />
        <div className="home__articles">
        {articles.map(article => (
        <ArticleBlog key={article.id} article={article} />
      ))}
        </div>
        <Avis />
    </div>
  )
}

export default Home