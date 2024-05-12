import React from "react";
import Homepage from "./components/Homepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Users from "./components/Users";
import UsersDetails from "./components/UsersDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
