import { Link } from "react-router-dom";
import freccia_scopri_white from '../assets/freccia_scopri_white.png'

export default function CardCategory({ bg_img, categoria }) {
    return (
        <>
            {/* Ricevo bgImg, nel figlio, come prop per poterla utilizzare all'interno del padre, 
            in questo caso il suo scopo è uguale a ClassName, cioè definisce lo sfondo della Card.
            utilizzo i backtick e la sintassi per il jsx cioè: {`... ${bgImg}`} */}
            <div className={`card-category card-bg ${bg_img}`}>
                <h4 className="h2-card-category">{categoria}</h4>
                <Link to={`/prodotti/${categoria}`}>
                    <img className="freccia_scopri" alt="freccia_scopri" src={freccia_scopri_white}></img>
                </Link>
            </div>
        </>
    );
}