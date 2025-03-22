import React from 'react'

const UpcomingAssignments = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-4 text-primary-800">Upcoming Assignments</h3>
      <ul className="space-y-3">
        <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-primary-700">Data Structures Assignment</h4>
            <p className="text-gray-600 text-sm">CS201 - Due 2024-03-20</p>
          </div>
          <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs font-medium">pending</span>
        </li>
        <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-primary-700">Digital Logic Design Lab</h4>
            <p className="text-gray-600 text-sm">EC202 - Due 2024-03-22</p>
          </div>
          <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs font-medium">submitted</span>
        </li>
      </ul>
    </div>
  )
}

export default UpcomingAssignments
