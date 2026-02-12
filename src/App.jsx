import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Home, Crops, Prediction } from './pages'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/prediction" element={<Prediction />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
