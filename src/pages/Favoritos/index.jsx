import { useEffect, useState } from 'react'
import './favoritos.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



export function Favoritos(){
    
    const [filmes, setfilmes] = useState([])

    useEffect(() => {
       
        const minhalista = localStorage.getItem('@flix')
        setfilmes(JSON.parse(minhalista) || [])


    }, [])
    
    function excluirfilme(id){

        const filterfilmes = filmes.filter((filme) => {
            return(
                filme.id !== id
            )
        })
       setfilmes(filterfilmes)
       localStorage.setItem('@flix', JSON.stringify(filterfilmes))
       toast.success('Filme removido com sucesso')
    }



    return(
        <div className='meus-filme'>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não tem nenhum filme salvo</span>}

            <ul>
                {filmes.map((filme) => {
                    return(
                        <li key={filme.id}>
                           <span>{filme.title}</span>
                           <div>
                               <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                               <button onClick={() => excluirfilme(filme.id)}>Excluir</button>
                           </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}