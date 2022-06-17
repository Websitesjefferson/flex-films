import { Link } from "react-router-dom"

import './not.css'


export function Erro(){
    return(
        <div className="not">
           <h1>404</h1>
           <h2>página não encontrada</h2>
           <Link to='/'>Veja todos os filmes</Link>

        </div>
    )
}