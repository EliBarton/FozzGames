import { NavLink, Route, Routes } from "react-router-dom";
import { LordOfDonuts } from "../games/gamewindows/lordofdonuts";
import { Galaga } from "../games/gamewindows/galaga";


export const GamesList = () => {


    return (
        <main className="container-fluid text-center">
            <p className="Welcome">
                Games List
            </p>
            <NavLink className='nav-link' to='galaga'>Galaga Online
            </NavLink>
            <NavLink className='nav-link' to='lordofdonuts'>Lord of the Donuts
            </NavLink>
        </main>
    );
}