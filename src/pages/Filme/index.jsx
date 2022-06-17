import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import './filme.css'
import Api from '../../serveces/Api';
import { toast } from "react-toastify";


export function Filme(){

    const {id} = useParams();
    const [filme, setFilme] = useState({})
    const [loanding, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        async function loadFilmes(){
            await Api.get(`/movie/${id}`,{
                params: {
                    api_key: "1f986a550f568f4b00d057a1fb31f754",
                    language: 'pt-BR',
                    
                }

            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)

            })
            .catch(() => {
                navigate('/', {replace: true})
                return;
            })
        }
        loadFilmes()


        return () => {

        }
    }, [navigate, id])

    function salvafilme(){
        const minhalista = localStorage.getItem('@flix')

        let filmesalvos = JSON.parse(minhalista) || [];

        const hasfilme = filmesalvos.some( (filmesalvo) => filmesalvo.id === filme.id)

        if(hasfilme){
            toast.success('OPS!! FILME JÁ FOI SALVO!')
            return;
        }
        filmesalvos.push(filme)
        localStorage.setItem('@flix', JSON.stringify(filmesalvos))
        toast.warn('FILME SALVO COM SUCESSO!')
    }

     if(loanding){
         return(
             <div className="filme-info">
                 <h1>Carregando Detalhes...</h1>
             </div>
         )
     }
    return(
        <div className="filme-info">
             <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

           <h4>Data de lançamento: {filme.release_date}</h4>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            

            <div className="buttons">
                <button onClick={salvafilme}>Salva</button>

                <button><a href={`https://www.youtube.com/results?search_query=${filme.title} trailer`} target={"_blank"}>Trailer</a></button>
            </div>
            
        </div>
    )
}