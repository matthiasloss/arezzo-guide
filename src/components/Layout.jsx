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
    <div className="min-h-screen bg-purple-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 pb-20">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive
                    ? 'text-purple-600'
                    : 'text-gray-500 hover:text-purple-500'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={isActive ? 'text-purple-600' : ''}
                  />
                  <span className={`text-xs mt-1 ${isActive ? 'font-semibold' : ''}`}>
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
