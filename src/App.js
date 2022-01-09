import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
