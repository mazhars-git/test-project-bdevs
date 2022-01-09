import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';


function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="about" element={< />} /> */}
    </Routes>
  );
}

export default App;
