import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import InstantBuy from "./components/InstantBuy";
import Login from "./components/Login";
import GetStarted from "./components/GetStarted";
import Learn from "./components/Learn";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/InstantBuy" element={<InstantBuy />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/GetStarted" element={<GetStarted />}></Route>
        <Route path="/Learn" element={<Learn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
