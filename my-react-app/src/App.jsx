import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast'
import Mainhome from './Components/Mainhome'

function App() {
  return (
    <>
      <Mainhome/>
      <Contact/>
      <Footer />
      <Toaster position="top-right" />
    </>
  )
}

export default App
