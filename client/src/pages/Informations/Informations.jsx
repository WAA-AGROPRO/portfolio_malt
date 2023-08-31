import React, { useState, useEffect } from 'react'
import ArticleBlog from '../../components/ArticleBlog/ArticleBlog'
import axios from "axios"
import { Link } from "react-router-dom"
import "./Informations.scss"

function Informations() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("articles.json")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  return (
    <div className='informations'>
        <div className="informations__articles">
        {articles.map(article => (
        <ArticleBlog key={article.id} article={article} />
      ))}
        </div>
        <Link to="/contact" className="informations__button">
            J'ai un projet à soumettre
        </Link>
    </div>
  )
}

export default Informations