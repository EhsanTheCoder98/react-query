import React from "react";
import Homepage from "./components/Homepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Users from "./components/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
