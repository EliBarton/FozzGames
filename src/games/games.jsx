import { Route, Routes } from "react-router-dom";
import { NotFound } from "../app";
import { GamesList } from "../gameslist/gameslist";
import { Galaga } from "./gamewindows/galaga";
import { LordOfDonuts } from "./gamewindows/lordofdonuts";
import { DogBubbles } from "./gamewindows/dogbubbles";
import { Hangman } from "./gamewindows/hangman";
import { TowerDefense } from "./gamewindows/defense";
import "./games.css"

export const Games = () => {
  return (
    <div className="container-fluid text-center">
      <Routes>
        <Route path="dogbubbles" element={<DogBubbles />} />
        <Route path="galaga" element={<Galaga />} />
        <Route path="lordofdonuts" element={<LordOfDonuts />} />
        <Route path="hangman" element={<Hangman />} />
        <Route path="towerdefense" element={<TowerDefense />} />
        <Route path="/" element={<p />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GamesList />
    </div>
  );
}