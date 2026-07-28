
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';
import { MyContext } from '../context/MyContext';
import { ProductContext } from '../context/ProductContext';


const Header = () => {
    const helloData = useContext(MyContext);
    const [product, setProduct] = useContext(ProductContext);
    const [query, setQuery] = useState("");
    const [searchValue, setSearchValue] = useState(null);

    console.log(product);
    


    const searchSubmited = e => {
        e.preventDefault();
        setSearchValue(query);

    }

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">{helloData}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/" className='text-decoration-none me-3'>Home</Link>
                            <Link to="/about" className='text-decoration-none me-3'>About</Link>
                            <Link to="/products" className='text-decoration-none'>Products</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Search
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
                    </div>

                </Container>
            </Navbar>
        </header>
    )
}

export default Header