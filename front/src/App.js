import React from 'react'; //{useState}
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//importation du router
import Router from './pages/Router';

//importation du context
import { ContextDatasFunction } from './_Utils/contexts/ContextDatas';

function App() {
  return (

    <ContextDatasFunction>
      <BrowserRouter>
      <Routes>
          <Route path='/*' element={<Router />} />
        
      </Routes>
      </BrowserRouter>
    </ContextDatasFunction>
  );
}

export default App;
