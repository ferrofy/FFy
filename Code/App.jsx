import { Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import Home_Dir from "./Pages/Home"
import Login from "./Pages/Login"
import Contact from "./Pages/Contact"
import Error404 from "./Pages/404"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home_Dir />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default App