import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/movie/:movieDetailsURL' element={<MovieDetails />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
