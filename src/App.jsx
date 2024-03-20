import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, DetailsPage } from "./pages";

function App() {
  return (
    <div className=" bg-black h-screen w-screen">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
