import Home from "../Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MovieDetail from "../Pages/MovieDetail";

const Router = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRouter/>} >
            <Route path="/:movieName" element={<MovieDetail/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
