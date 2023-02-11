import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup";
import PopUp from './components/popup';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/pop" element={<PopUp />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
