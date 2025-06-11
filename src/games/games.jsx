import { Route, Routes } from "react-router-dom";
import { NotFound } from "../app";
import { GamesList } from "../gameslist/gameslist";
import { Galaga } from "./gamewindows/galaga";
import { LordOfDonuts } from "./gamewindows/lordofdonuts";
import { DogBubbles } from "./gamewindows/dogbubbles";
import { WordGame } from "./gamewindows/wordgame";
import "./games.css"

export const Games = () => {
  return (
    <div className="container-fluid text-center">
      <Routes>
        <Route path="dogbubbles" element={<DogBubbles />} />
        <Route path="galaga" element={<Galaga />} />
        <Route path="lordofdonuts" element={<LordOfDonuts />} />
        <Route path="wordgame" element={<WordGame />} />
        <Route path="/" element={<p />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GamesList />
    </div>
  );
}