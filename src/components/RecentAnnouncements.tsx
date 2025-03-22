import React from 'react'

const RecentAnnouncements = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-4 text-primary-800">Recent Announcements</h3>
      <ul className="space-y-3">
        <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-primary-700">Mid-semester Examination Schedule</h4>
            <p className="text-gray-600 text-sm">2024-03-15</p>
          </div>
          <span className="bg-red-200 text-red-800 py-1 px-2 rounded-full text-xs font-medium">exam</span>
        </li>
        <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-primary-700">Technical Symposium Registration Open</h4>
            <p className="text-gray-600 text-sm">2024-03-18</p>
          </div>
          <span className="bg-accent-200 text-accent-800 py-1 px-2 rounded-full text-xs font-medium">event</span>
        </li>
      </ul>
    </div>
  )
}

export default RecentAnnouncements
