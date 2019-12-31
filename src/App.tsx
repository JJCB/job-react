import React from 'react';
import './App.css';
import { renderRoutes } from 'react-router-config';

const App: React.FC = ({ route }: any) => {
  return (
    <div className="App">
      {renderRoutes(route.routes)}
    </div>
  );
}

export default App;
