import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand m-3" to="/">Veterinaria Momo</Link>

                <div className="collapse navbar-collapse "  id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/clientes">Clientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mascotas">Mascotas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
