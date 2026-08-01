import React from 'react'
import { Link } from 'react-router';

const Home = () => {

    return (
        <div>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">Welcome to Extra Shop</h1> <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Discover premium electronics at unbeatable prices — from smartphones and laptops to smart home devices and audio gear. Extra Shop brings you the newest technology with fast delivery, secure payments, and unmatched customer support.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to="/products" className="btn btn-primary btn-lg px-4 gap-3"> Shop now</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home