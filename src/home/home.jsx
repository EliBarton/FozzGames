import React from "react";
import { Link } from "react-router-dom";
import './home.css'

const HomePage = () => {
    return (
        <div className="container-fluid text-center">
            <div className="contact-bar"><a href="mailto:elidbarton@gmail.com">Contact us</a></div>
            <p className="Welcome"></p>
            <p>Featured game:</p>
            <div className="banner">
                <div className="banner-overlay">
                    <p className="Welcome">Lord of the Donuts
                    </p>
                    <Link type="button" className="btn btn-primary btn-lg" to='games/lordofdonuts'>Play</Link>
                    <p>Todd must save his donuts, and the world.</p>
                </div>
            </div>

            <p>Latest:</p>

            <div className="item-list">
                <li>
                    <Link className="list-item" to="games/dogbubbles">
                        <img src={`${import.meta.env.BASE_URL}/imgs/dogbubbles.png`} alt="Dog Bubbles" height="100" />
                        Dog Bubbles</Link>
                </li>
                <li>
                    <Link className="list-item" to="games/lordofdonuts">
                        <img src={`${import.meta.env.BASE_URL}/imgs/lordofdonuts.png`} alt="Lord of the Donuts" height="100" />
                        Lord of the Donuts</Link>
                </li>
                <li>
                    <Link className="list-item" to="games/galaga">
                        <img src={`${import.meta.env.BASE_URL}/imgs/galaga.png`} alt="Galaga Online" height="100" />
                        Galaga Online</Link>
                </li>
            </div>
        </div>
    );
}
export default HomePage