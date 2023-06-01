
import './Expertise.scss'
import reactLogo from '../../assets/react.svg'
import nodeLogo from '../../assets/nodejs.svg'
import expressLogo from '../../assets/express.svg'
import mongoLogo from '../../assets/mongodb.svg'
import mysqlLogo from '../../assets/mysql.svg'
import viteLogo from '../../assets/vitejs.svg'
import sassLogo from '../../assets/sass.svg'
import ffLogo from '../../assets/flutterflow.png'
import firebaseLogo from '../../assets/firebase.svg'

//Logo purplecat clicak effet on hover text appear click there
function Expertise() {
  return (
    <div className="expertise">
 

        <h1 className="title">Expertise</h1>
        <main className="expertise__content">
            <section className="expertise__cards">
                <div className="expertise__card">
                    <div className="expertise__card__head">
                    <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                            <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                        <h5 className="card__title">
                            <span>
                                Frontend
                            </span>
                            <br />
                            Developpement
                        </h5>
                    </div>
                <div className="expertise__card__content">
                <p className="card__text">
                    Passionné de UI/UX, je programme généralement en ReactJS et en SCSS avec Vite.js.
                </p>
                <div className="card__logo">
                        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                            <img src={sassLogo} className="logo react" alt="React logo" />
                        </a>
                        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                            <img src={viteLogo} className="logo react" alt="React logo" />
                        </a>
                </div>
                </div>
                </div>
                <div className="expertise__card expertise__card--orange">
                <div className="expertise__card__head">
                <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                        <img src={nodeLogo} className="logo react" alt="Node logo" />
                    </a>
                        <h5 className="card__title card__title--black">
                            <span>
                                Backend
                            </span>
                            <br />
                            Developpement
                        </h5>
                    </div>
                    <div className="expertise__card__content">
                <p className="card__text">
                    J'utilise généralement NodeJS pour le backend et Express pour le 
                    routing avec des base de données en MySQL ou en MongoDB.

                </p>
                <div className="card__logo">
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                            <img src={expressLogo} className="logo react" alt="React logo" />
                        </a>
                        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                            <img src={mongoLogo} className="logo react" alt="React logo" />
                        </a>
                        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                            <img src={mysqlLogo} className="logo react" alt="React logo" />
                        </a>
                </div>
                </div>
                </div>
                <div className="expertise__card">
                <div className="expertise__card__head">
                    <a href="https://www.flutterflow.io" target="_blank" rel="noreferrer">
                        <img src={ffLogo} className="logo react" alt="Flutterflow logo" />
                    </a>
                    <h5 className="card__title">
                        <span>
                            Mobile
                        </span>
                        <br />
                            Developpement
                     </h5>
                </div>

                <div className="expertise__card__content">
                <p className="card__text">

                    Je prends en charge des projets no-code mobile avec FlutterFlow et Firebase.
                </p>
                <div className="card__logo">
                <a href="https://flutterflow.io" target="_blank" rel="noreferrer">
                            <img src={ffLogo} className="logo react" alt="Flutterflow logo" />
                        </a>
                        <a href="https://firebase.com" target="_blank" rel="noreferrer">
                            <img src={firebaseLogo} className="logo react" alt="Firebase logo" />
                        </a>
                </div>
                </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Expertise