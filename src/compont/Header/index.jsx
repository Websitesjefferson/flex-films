import "./style.css"
import { Link } from "react-router-dom"

export function Header(){
    return(
        <header>
            <Link className="logo" to="/">Filme Flix</Link>
            <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
        </header>
    )
}