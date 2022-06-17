import { useEffect, useState} from 'react'
import Api from '../../serveces/Api';
import {Link} from 'react-router-dom'
import './Home.css'

export function Home(){
const [filmes, setFilmes] = useState([]);
const [loading, setLoading] = useState(true)

useEffect(() => {
     
    async function loadFilmes() {
    
     const response = await Api.get('movie/now_playing',{
         params: {
             api_key: "1f986a550f568f4b00d057a1fb31f754",
             language: 'pt-BR',
             page: 1,
         }
     })
    
    setFilmes(response.data.results.slice(0, 20))
    setLoading(false)
   
    }

    loadFilmes()

}, [])

if(loading){
    return(
        <h2 className='loading'>Carregando Filme...</h2>
    )
}


    return(
        <div className='conteiner'>
            <div className='lista-filme'>
              {filmes.map((filme) => {
                return(
                    <article key={filme.id}>
                        <strong >{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt="" />
                        <Link to={`/Filme/${filme.id}`}>Acessar</Link>
                    </article>
                )  
              })}
                 

            </div>
           
        </div>
    )
}