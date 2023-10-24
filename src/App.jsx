import { useState } from 'react'

import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="business-card">
        <Header />
        <MainContent />
        <Footer />
      </main>
    </>
  )
}

export default App
