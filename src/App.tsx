import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DashboardWidgets from './components/DashboardWidgets'
import ClassSchedule from './components/ClassSchedule'
import UpcomingAssignments from './components/UpcomingAssignments'
import RecentAnnouncements from './components/RecentAnnouncements'
import LoginPage from './components/LoginPage'

function App() {
  const isLoggedIn = false // Assume not logged in initially; replace with actual auth logic

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <div className="min-h-screen bg-primary-50">
              <Header />
              <div className="container mx-auto px-4 py-8 flex">
                <Sidebar />
                <main className="flex-1 ml-0 lg:ml-64">
                  <div className="bg-white rounded-lg shadow-md p-6 w-full">
                    <h2 className="text-xl font-bold mb-4 text-primary-800">Welcome back, John!</h2>
                    <p className="text-gray-600">Here's what's happening with your academics today.</p>
                    <DashboardWidgets />
                    <ClassSchedule />
                    <UpcomingAssignments />
                    <RecentAnnouncements />
                  </div>
                </main>
              </div>
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  )
}

export default App
