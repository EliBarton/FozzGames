
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../app';
import { ToolsList } from './toolslist';
import LevelGenerator from './LevelGenerator/levelgenerator';


export const Tools = () => {
    return (
      <div className="container-fluid text-center">
        <Routes>
          <Route path="levelgenerator" element={<LevelGenerator />} />
          <Route path="/" element={<p />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToolsList />
      </div>
    );
  }