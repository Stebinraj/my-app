import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Link, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';

function App() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>AboutUs</Link>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </div>
    );
}

export default App;
