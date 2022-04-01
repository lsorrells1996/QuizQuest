import React, {useState, useEffect} from "react"
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom"
import Landing from "./Landing";
import Home from "./Home"
import Quiz from "./Quiz";
import Profile from "./Profile";

function App() {

    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/me').then(r => {
            if (r.ok) {
                r.json().then(user => setUser(user))
            } else {
                if (r.status === 401) {
                    navigate('/')
                }
            }
        })
    }, [])

    return (
    // <BrowserRouter>
        <Routes>
            <Route path= "/" element={<Landing setUser={setUser} user={user}/>}/>
            <Route path= "/home" element={<Home setUser={setUser} user={user}/>}/>
            <Route path= "/profile" element={<Profile setUser={setUser} user={user}/>}/>
            <Route path= "/quizzes/:id" element={<Quiz />}/>
        </Routes>
    // </BrowserRouter>
    );
}

export default App;
