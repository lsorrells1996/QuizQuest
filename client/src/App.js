import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Landing from "./Components/Landing";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path= "/login" element={<Landing/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
