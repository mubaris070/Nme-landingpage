import About from './Components/About'
// import { Routes, Route } from 'react-router-dom'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast'
import Mainhome from './Components/Mainhome'

function App() {
  return (
    <>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Mainhome/>
      <Contact/>
      <Footer />
      <Toaster position="top-right" />
    </>
  )
}

export default App
