import React from 'react'
import { Menu, Search } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <button className="lg:hidden mr-4 text-primary-700">
          <Menu />
        </button>
        <h1 className="text-xl font-bold text-primary-800">ARC Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 text-primary-700"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search className="text-gray-400" />
          </div>
        </div>
        {/* User Profile Dropdown (Placeholder) */}
        <button className="rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-500">
          <img
            src="https://replicate.delivery/pbxt/9VrK0HbF6RAjJjSjdwvQvKPYVpQcuPj73JXwRgxQ6yKcog2wA/profile.png"
            alt="User Avatar"
            className="h-12 w-12 rounded-full"
          />
        </button>
      </div>
    </header>
  )
}

export default Header
