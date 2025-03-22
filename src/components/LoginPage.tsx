import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('student') // Default to student
  const navigate = useNavigate()

  const handleLogin = () => {
    if (userType === 'student' && email === 'vd24mab0a41@student.com' && password === 'password') {
      // Replace 'password' with actual password handling (e.g., secure storage, API call)
      navigate('/') // Redirect to dashboard for student login
      alert('Student Login Successful') // Temporary success message
    } else if (userType === 'teacher') {
      // Handle teacher login logic here
      alert('Teacher Login Attempt - Not yet implemented') // Placeholder for teacher login
    } else {
      alert('Login Failed: Invalid credentials or user type.')
    }
  }

  return (
    <div className="min-h-screen bg-primary-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="userType" className="block text-gray-700 text-sm font-bold mb-2">
            User Type
          </label>
          <select
            id="userType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-primary-500 hover:text-primary-800" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
