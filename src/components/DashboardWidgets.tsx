import React from 'react'
import { Clock, BarChart, CalendarCheck, Bell } from 'lucide-react'

const DashboardWidgets = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center mb-2">
          <Clock className="text-primary-500 mr-2" />
          <h3 className="font-bold text-primary-700">Attendance</h3>
        </div>
        <p className="text-2xl font-semibold text-primary-800">85% <span className="text-sm text-gray-500">(Click for details)</span></p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center mb-2">
          <BarChart className="text-secondary-500 mr-2" />
          <h3 className="font-bold text-secondary-700">Branch Rank</h3>
        </div>
        <p className="text-2xl font-semibold text-secondary-800">15/45</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center mb-2">
          <CalendarCheck className="text-accent-500 mr-2" />
          <h3 className="font-bold text-accent-700">Upcoming Exams</h3>
        </div>
        <p className="text-2xl font-semibold text-accent-800">2</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center mb-2">
          <Bell className="text-primary-500 mr-2" />
          <h3 className="font-bold text-primary-700">Events</h3>
        </div>
        <p className="text-2xl font-semibold text-primary-800">3</p>
      </div>
    </div>
  )
}

export default DashboardWidgets
