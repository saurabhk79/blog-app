import "./App.css";

import { Routes, Route } from "react-router-dom";
import {Home, Login, Register} from "./pages";

const App = () => {
  return (
    <div className="app">
      
      <Routes>
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />}  />
        <Route path="/" element={<Home />}  />
      </Routes>
    </div>
  );
};

export default App;
