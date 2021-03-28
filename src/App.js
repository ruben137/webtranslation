import React,{useState} from 'react';

import Portada from './components/Portada'

function App() {

    const [idioma, setIdioma] = useState('Español')

  const handleInputChange = (e) => {
    setIdioma(
     e.target.value )

  }


return (
  <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {idioma==='Español'&&<a href="#" className="navbar-brand">Traduce tu web</a>}
        {idioma==='English'&&<a href="#" className="navbar-brand">Translate your website</a>}
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <ul className="navbar-nav ms-auto">
            <li>
              <select class="form-select" aria-label="Default select example" onChange={handleInputChange} name='idioma'>
             
                <option selected>Español</option>
                <option >English</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  <Portada idioma={idioma}/>

  
  </>
  );
}

export default App;
