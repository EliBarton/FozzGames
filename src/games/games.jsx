import { Route, Routes } from "react-router-dom";
import { NotFound } from "../app";
import { GamesList } from "../gameslist/gameslist";
import { Galaga } from "./gamewindows/galaga";
import { LordOfDonuts } from "./gamewindows/lordofdonuts";

export const Games = () => {
    return (
            <main className="container-fluid text-center">
                <Routes>
                    <Route path='galaga' element={<Galaga />}/>
                    <Route path='lordofdonuts' element={<LordOfDonuts />}/>
                    <Route path='/' element={<p/>}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <GamesList />
            </main>
        );
}