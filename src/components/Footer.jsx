import React from "react"

import gh from "../assets/gh.png"
import li from "../assets/li.png"

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="social-links">
                <li><a href="https://github.com/JessJudd/" target="_blank"><img src={gh} /></a></li>
                <li><a href="https://www.linkedin.com/in/jessjudd/" target="_blank"><img src={li} /></a></li>
            </ul>
            <small className="attribution"><a href="https://www.flaticon.com/free-icons/dark-mode" title="dark mode icons">icons created by Marz Gallery - Flaticon</a></small>
        </footer>
    )
}