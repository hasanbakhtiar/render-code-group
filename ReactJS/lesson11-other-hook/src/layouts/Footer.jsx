import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-2 text-body-secondary">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link px-2 text-body-secondary">
                            About us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link px-2 text-body-secondary">
                            Products
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-body-secondary">© {new Date().getFullYear()} Extra Shop, Inc</p>
            </footer>
        </div>


    )
}

export default Footer