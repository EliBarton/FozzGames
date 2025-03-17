import { NavLink, Route, Routes } from "react-router-dom";


export const GamesList = () => {


    return (
        <main className="container-fluid text-center">
            <p className="Welcome">
                Games List
            </p>
            <NavLink className='nav-link' to='dogbubbles'>Dog Bubbles
            </NavLink>
            <NavLink className='nav-link' to='galaga'>Galaga Online
            </NavLink>
            <NavLink className='nav-link' to='lordofdonuts'>Lord of the Donuts
            </NavLink>
        </main>
    );
}