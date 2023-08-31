
import { Link } from "react-router-dom"
import "./ArticleBlog.scss"

const ArticleBlog = ({ article }) => {
    return (
        <div className="article-blog">
            <div className="article-blog__img">
                <img src={article.image} alt="article" />
            </div>
            <div className="article-blog__content">
                <div className="article-blog__content__title">
                    {article.title}
                </div>
                <p className="article-blog__content__text">
                    {article.description}
                </p>
                <div className="flex-row">
                    <div className="article-blog__content__date">
                        {article.date}
                    </div>
                    <div className="article-blog__content__view">
                        {article.view} vues
                    </div>
                </div>
                <Link to={`/article/${article.id}`}>
                    <button className="article-blog__content__button">
                            Lire la suite
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default ArticleBlog