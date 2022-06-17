import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Home } from './pages/Home'
import { Filme } from './pages/Filme'
import { Header } from './compont/Header'
import { Favoritos } from './pages/Favoritos'

import { Erro } from './pages/Erro'
export function RouterApp(){

    return(
        <div>
            <BrowserRouter>
              <Header/>
             <Routes>
                 <Route path='/' element={<Home/>} />
                 <Route path='Filme/:id' element={<Filme/>}/>
                 <Route path='Favoritos' element={ <Favoritos/>} />

                 <Route path='*' element={ <Erro/>}/>
             </Routes>
            </BrowserRouter>
        </div>
    )

}