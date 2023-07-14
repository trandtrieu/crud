import "./App.css";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import View from "./components/View";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="App">
            <ToastContainer></ToastContainer>

            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Add />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/view" element={<View />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
