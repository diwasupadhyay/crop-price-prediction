import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/', enabled: true },
    { name: 'About', path: '/#about', enabled: true },
    { name: 'Crops', path: '/crops', enabled: true },
    { name: 'Prediction', path: '/prediction', enabled: true },
    { name: 'Team', path: '/#team', enabled: true },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false)
    
    if (path.includes('#')) {
      const id = path.split('#')[1]
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="px-4 pointer-events-auto">
          <div className="flex items-center justify-center">
            {/* Desktop Navigation - Premium Glass Pill */}
            <div className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                    ${item.enabled 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 cursor-not-allowed'}
                    ${location.pathname === item.path 
                      ? 'text-white' 
                      : 'hover:bg-white/[0.08]'}
                  `}
                >
                  {/* Active background pill with emerald glow */}
                  {location.pathname === item.path && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/30 to-green-500/30 backdrop-blur-xl border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-500" />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-4 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/[0.12] transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 w-80 h-full bg-[#0f1a0f]/95 backdrop-blur-2xl border-r border-white/[0.05] shadow-2xl transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-8 pt-28">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`block px-5 py-4 rounded-2xl text-lg font-medium transition-all duration-300
                    ${item.enabled
                      ? 'text-gray-400 hover:text-white hover:bg-emerald-500/10'
                      : 'text-gray-600 cursor-not-allowed'}
                    ${location.pathname === item.path ? 'text-white bg-emerald-500/10' : ''}
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-10 left-8 right-8">
              <div className="pt-6 border-t border-white/[0.08]">
                <p className="text-sm text-gray-600 text-center font-light">
                  B.Tech CSE Capstone Project
                </p>
                <p className="text-xs text-emerald-500/60 text-center mt-2">
                  Crop Price Prediction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
