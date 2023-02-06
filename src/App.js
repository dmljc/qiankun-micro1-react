import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Mountain from "./Mountain";
import Water from "./Water";

function App() {
  return (
    <div className="App">
      <Link to='/mountain'>子应用1-山</Link>
      <br />
      <Link to='/water'>子应用2-水</Link>

      <Routes>
        <Route path='mountain' element={<Mountain />} />
        <Route path='water' element={<Water />} />
      </Routes>
    </div>
  );
}

export default App;
