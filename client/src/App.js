import React, {useState} from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Landing from "./Components/Landing";


function App() {

    const [user, setUser] = useState(null);

    return (
    <BrowserRouter>
        <Routes>
            <Route path= "/login" element={<Landing setUser={setUser}/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
