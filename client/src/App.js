import React, {useState, useEffect} from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Landing from "./Components/Landing";
import Home from "./Components/Home"
import Addition from "./Components/Quiz";
import Profile from "./Components/Profile";

function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('/me').then(r => {
            if (r.ok) {
                r.json().then(user => setUser(user))
            }
        })
    }, [])


    return (
    <BrowserRouter>
        <Routes>
            <Route path= "/" element={<Landing setUser={setUser} user={user}/>}/>
            <Route path= "/home" element={<Home setUser={setUser} user={user}/>}/>
            <Route path= "/profile" element={<Profile setUser={setUser} user={user}/>}/>
            <Route path= "/addition" element={<Addition />}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
