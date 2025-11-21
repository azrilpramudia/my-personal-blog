import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Article from "../pages/Article";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/article" element={<Article />} />
    </Routes>
  );
}
