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
                    <p className="Welcome">Loopy Dogfights
                    </p>
                    <Link type="button" className="btn btn-primary btn-lg" to='games/loopydogfights'>Play</Link>
                    <p>Experience aerial combat with a twist!</p>
                </div>
            </div>

            <p>Latest:</p>

            <div className="latest-games-panel">
                <div className="item-list">
                    <li>
                        <Link className="list-item" to="games/loopydogfights">
                            <img src={`/imgs/loopydogfights.png`} alt="Loopy Dogfights" height="100" />
                            <span>Loopy Dogfights</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="list-item" to="games/dogbubbles">
                            <img src={`/imgs/dogbubbles.png`} alt="Dog Bubbles" height="100" />
                            <span>Dog Bubbles</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="list-item" to="games/lordofdonuts">
                            <img src={`/imgs/lordofdonuts.png`} alt="Lord of the Donuts" height="100" />
                            <span>Lord of the Donuts</span>
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    );
}
export default HomePage