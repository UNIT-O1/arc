import React from 'react'
import { Home, Calendar, Book, MessageSquare, Settings, HelpCircle } from 'lucide-react'

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-primary-800 text-white w-64 min-h-screen py-8 px-4 fixed lg:block hidden">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">ARC Dashboard</h2>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-accent-200">
              <Home />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-accent-200">
              <Calendar />
              <span>Schedule</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-accent-200">
              <Book />
              <span>Courses</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-accent-200">
              <MessageSquare />
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-accent-200">
              <Settings />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-accent-200">
              <HelpCircle />
              <span>Help & Support</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
