import { useNavigate } from "react-router-dom";
import "../App.css"
import { useState } from "react";

function NavBar() {
    const nav = useNavigate()
    
    setInterval(updateTime, 1000)
    const now = new Date().toLocaleTimeString()
    const [time, setTime] = useState(now)

    function updateTime()
    {
        setTime(new Date().toLocaleTimeString())
    }

    return (
        <>
            <div className="navbar">
                <button onClick={()=>{nav("/home")}}>Home</button>
                <button onClick={()=>{nav("/about")}}>About</button>
                <button onClick={()=>{nav("/works")}}>Works</button>
                <h2>Blake McCarthy</h2>
                <button className="clock">{time}</button>
            </div>
        </>
    )
}

export default NavBar;