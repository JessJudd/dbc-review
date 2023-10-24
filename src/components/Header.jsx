import React from "react"

import LadyWorld from '../assets/lady-world.png'
import BlessingLadyWorld from '../assets/lady-world-blessings.svg'
import DarkMode from '../assets/dark-mode.png'
import LightMode from '../assets/sun.png'

export default function Header() {
  return (
    <header className="header">
      <button className="dark-mode color-toggle tool-tip"><img src={DarkMode} /><span className="tool-tip-text">Coming Soon!</span></button>
      <button className="light-mode color-toggle tool-tip"><img src={LightMode} /><span className="tool-tip-text">Coming Soon!</span></button>
      <img class="blessing-theme-only" src={BlessingLadyWorld} />
      <img class="no-theme" src={LadyWorld} />
      <div className="header-content">
        <h1>Jess Judd</h1>
        <h3>Frontend Developer</h3>
        <a className="text-link" href="https://jessjudd.dev" target="_blank">jessjudd.dev</a>
      </div>
    </header>
  )
}