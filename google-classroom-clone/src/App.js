import "./App.css";
import { BrowserRouter , BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Navbar from "./components/Navbar";
import Class from "./screens/Class";

function App() {
  return (
    
    <div className="app">   
      <Router>       
       
        <Routes>
          <Route exact path="/" element={<><Home/></>}/>            
          
          <Route exact path="/dashboard" element={<><Navbar/><Dashboard/></>}/>                
          
          <Route exact path="/class/:id" element={<><Navbar/><Class/></>}/>
        </Routes>
      </Router>
    </div>

    
  );
}

export default App;
