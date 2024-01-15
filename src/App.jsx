import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Template from './Partials/Template/Template';
import InfoPage from './Pages/Info/Info';



function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* Définit la route racine avec le composant Template comme élément parent */}
        <Route path= "/" element={<Template />}>
        {/* Définit la route racine avec le composant Home comme élément enfant  */}
         <Route path= "/" element={<Home />} />
         {/* Définit la route "/info/:name" avec le composant InfoPage comme élément enfant */}
         <Route path= "/info/:name" element={<InfoPage />} />
       </Route>
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;




