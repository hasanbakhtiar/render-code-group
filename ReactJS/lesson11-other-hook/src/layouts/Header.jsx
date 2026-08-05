
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';
import { ProductContext } from '../context/ProductContext';
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useCart } from 'react-use-cart';

const localUser = "Hasan";

const Header = () => {
    const [product, setProduct] = useContext(ProductContext);
    const [query, setQuery] = useState("");
    const [searchValue, setSearchValue] = useState(null);
    const { totalUniqueItems } = useCart();



    const searchSubmited = e => {
        e.preventDefault();
        setSearchValue(query);

    }

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to="/" className='text-decoration-none'>Extra Shop</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/" className='text-decoration-none me-3'>Home</Link>
                            <Link to="/about" className='text-decoration-none me-3'>About</Link>
                            <Link to="/products" className='text-decoration-none me-3'>Products</Link>
                            <Link to="/contact" className='text-decoration-none'>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <FaSearch style={{ fontSize: "18px" }} />

                        </button>
                        {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Search</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={searchSubmited} className="input-group mb-3">
                                            <input onChange={e => setQuery(e.target.value)} type="text" className="form-control" placeholder="Enter product name" />
                                            <button className="btn btn-info">Search</button>
                                        </form>

                                        <ul className="list-group">
                                            {query < 1 ? null : product.filter(value => value.title.toLocaleLowerCase().includes(searchValue)).map(item => (
                                                <a href={`/products/${item.id}`} key={item.id} className="list-group-item">{item.title}</a>

                                            ))}
                                        </ul>


                                    </div>

                                </div>
                            </div>
                        </div>
                        <Link to={"/basket"} type="button" className="btn btn-primary position-relative ms-3">
                            <FaShoppingCart style={{ fontSize: "18px" }} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {totalUniqueItems}
                            </span>
                        </Link>

                        {localUser ? <Link className='btn btn-light ms-3'>{localUser}</Link> :
                            <>
                                <Link className='btn btn-info ms-3'>Login</Link>
                                <Link className='btn btn-warning ms-3'>Register</Link>
                            </>
                        }

                    </div>

                </Container>
            </Navbar>
        </header>
    )
}

export default Header