import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
