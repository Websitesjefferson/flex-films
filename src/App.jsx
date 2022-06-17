 
 import { RouterApp } from "./route"
 import { ToastContainer } from 'react-toastify'

 import 'react-toastify/dist/ReactToastify.css';
 
 export function App (){
     return(
         <div className="app">
             <ToastContainer autoClose={3000}/>
            <RouterApp />
         </div>
     )
 }