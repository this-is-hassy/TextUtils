
import React, { useState} from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

document.body.style.height = "100vh"
function App() {


 
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)


  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.background = "linear-gradient(180deg, rgb(27, 27, 42) 0%, rgb(16, 21, 44) 72%, rgb(6, 5, 42) 100%)"
      document.body.style.color = "white"
      setMode("dark")

    } else {
      document.body.style.background = "white";
      document.body.style.color = "black"
      setMode("light")

    }
  }

  return (
    <>
      <Router>
        <Navbar title={"TextUtils"} toggle={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <Routes>
          <Route index exact path="/" element={<TextForm heading={"Enter your text to analyze"} alert={showAlert} firstbutton={"Convert to Upper Case"} secondbutton={'Convert to Lower Case'} mode={mode} />} />
          <Route index exact path="/home" element={<TextForm heading={"Enter your text to analyze"} alert={showAlert} firstbutton={"Convert to Upper Case"} secondbutton={'Convert to Lower Case'} mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;


