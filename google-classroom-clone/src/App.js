import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Navbar from "./components/Navbar";
import Class from "./screens/Class";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}>
            
          </Route>
          <Route exact path="/dashboard" element={<><Dashboard/><Navbar /></>}>
            
          </Route>
          <Route exact path="/class/:id" element={<><Class/><Navbar /></>}>
            
          </Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
