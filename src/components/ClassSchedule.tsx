import React from 'react'

const ClassSchedule = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-4 text-primary-800">Class Schedule</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 rounded-lg shadow-sm bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-primary-700">Time</th>
              <th className="border border-gray-200 px-4 py-2 text-primary-700">Monday</th>
              <th className="border border-gray-200 px-4 py-2 text-primary-700">Tuesday</th>
              <th className="border border-gray-200 px-4 py-2 text-primary-700">Wednesday</th>
              <th className="border border-gray-200 px-4 py-2 text-primary-700">Thursday</th>
              <th className="border border-gray-200 px-4 py-2 text-primary-700">Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-2 text-primary-700">8:00-8:55</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">DMS</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">DMS</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 text-primary-700">9:00-9:55</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700 bg-gray-50">BEE LAB</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700 bg-gray-50">DMS</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">ELA</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 text-primary-700">10:00-10:55</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700 bg-gray-50">BEE LAB</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">DSA</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 text-primary-700">11:00-11:55</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700 bg-gray-50">BEE LAB</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">BEEE</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">DSA</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 text-primary-700">12:00-12:55</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700 bg-gray-50">BEE LAB</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">BEEE</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">ODE</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">BEEE</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-red-500">LUNCH</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 text-primary-700">13:00-13:55</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-red-500">LUNCH</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-red-500">LUNCH</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-red-500">LUNCH</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-red-500">LUNCH</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 text-primary-700">14:00-14:55</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">ODE</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">BEEE</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700 bg-gray-50">DSA LAB</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 text-primary-700">15:00-16:00</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">ELA</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">ODE</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700 bg-gray-50">DSA LAB</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">DT</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 text-primary-700">16:05-17:00</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">ELA</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700">DT</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 text-primary-700">17:05-18:00</td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
              <td className="border border-gray-200 px-4 py-2 text-center text-primary-700"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ClassSchedule
