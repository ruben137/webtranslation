import React,{useEffect,useState} from 'react'
import '../index.css'
import imagen from '../img/translation.png'

export default function Portada(props){
  const {idioma}=props

  return(
    <>
    <div className="container">
      <div className="row columna">
        <div className="col-md-6 d-flex justify-content-center flex-column">
          
            {idioma==='Español' && <h1>¿Quieres traducir tu sitio web?</h1>}
            {idioma==='English' && <h1>Do you want to translate your website?</h1>}
         
        
        
         {idioma==='Español' && <p>Con una simple implementacion de reactjs se puede traducir manualmente tu sitio web, esto es de utilidad si eres bilingue y quieres que tu portafolio sea multi-idioma, esto ayudara a que tu pagina web pueda ser leida por la mayor cantidad de usuarios posible</p>}
         {idioma==='English' && <p>With a simple implementation of reactjs you can manually translate your website, this is useful is you are bilingual and you want your personal website to be multi-language, this will help by making your website readable by the largest quantity of users as possible</p> }
            
        
        
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <img src={imagen} alt="" className='w-50'/>
        </div>
      </div>
      
    </div>
    </>
  )
}