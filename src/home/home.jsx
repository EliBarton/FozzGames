import React from "react";

const HomePage = () => {
    return (
        <>
            <main className="container-fluid text-center">
                <div className="contact-bar"><a href="mailto:elidbarton@gmail.com">Contact us</a></div>
                <p className="Welcome">Fozz Games</p>
                <p>Featured game:</p>
                <div className="banner">
                    <div className="banner-overlay">
                        <p className="Welcome">Lord of the Donuts
                        </p>
                        <button type="button" className="btn btn-primary btn-lg">Play</button>
                        <p>Todd must save his donuts, and the world.</p>
                    </div>
                </div>

                <p>Latest:</p>

                <div className="item-list">
                    <li>
                        <a className="list-item" href="game_pages/lordofdonuts.html">
                            <img src="imgs/lordofdonuts.png" alt="Lord of the Donuts" height="100" /> Lord of the Donuts</a>
                    </li>
                    <li>
                        <a className="list-item" href="game_pages/galaga.html">
                            <img src="imgs/galaga.png" alt="Galaga Online" height="100" /> Galaga Online</a>
                    </li>
                </div>
            </main>
        </>
    );
}
export default HomePage