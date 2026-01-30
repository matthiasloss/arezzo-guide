import { Outlet, NavLink } from 'react-router-dom'
import { Home, Map, MapPin, Route as RouteIcon, Info } from 'lucide-react'

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/karte', icon: Map, label: 'Karte' },
  { to: '/orte', icon: MapPin, label: 'Orte' },
  { to: '/touren', icon: RouteIcon, label: 'Touren' },
  { to: '/info', icon: Info, label: 'Info' },
]

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--tuscan-cream)' }}>
      {/* Main Content */}
      <main className="flex-1 pb-24">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass safe-area-bottom z-50">
        <div className="flex justify-around items-center h-18 max-w-lg mx-auto">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 py-3 transition-all duration-300 ${
                  isActive
                    ? 'text-[#c75b39]'
                    : 'text-[#4a3728]/50 hover:text-[#4a3728]/80'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-[#c75b39]/10 scale-110'
                      : ''
                  }`}>
                    <Icon
                      size={22}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  </div>
                  <span className={`text-xs mt-1 transition-all duration-300 ${
                    isActive ? 'font-semibold' : 'font-medium'
                  }`}>
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
