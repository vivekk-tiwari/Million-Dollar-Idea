import React from "react";
import PlacesToVisit from "./Places_To_Visit";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./Home_Page";
import Cafes from "../Component_2/Cafes";
import Stores from "./Stores";
import Unique from "./Unique";


function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/placestovisit" element={<PlacesToVisit/>}/>
          <Route exact path="/cafes" element={<Cafes/>}/>
          <Route exact path="/stores" element={<Stores/>}/>
          <Route exact path="/unique" element={<Unique/>}/>
        </Routes>
  </>
  );
}

export default App;
