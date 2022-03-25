import React, {useState} from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Landing from "./Components/Landing";
import Home from "./Components/Home"

function App() {

    const [user, setUser] = useState(null);

    return (
    <BrowserRouter>
        <Routes>
            <Route path= "/" element={<Landing setUser={setUser}/>}/>
            <Route path= "/home" element={<Home setUser={setUser}/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
