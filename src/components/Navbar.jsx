import React, { useState } from 'react'

export default function Navbar(props) {
  const [datos, setDatos] = useState({
    idioma: ''
  })

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value

    })}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Traduce tu web</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <ul className="navbar-nav ms-auto">
            <li>
              <select class="form-select" aria-label="Default select example" onChange={handleInputChange} name='idioma'>
                <option selected>Lenguaje</option>
                <option >Español</option>
                <option >English</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

