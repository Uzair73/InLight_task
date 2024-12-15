import React, { useState } from 'react'
import Button from './Button'
import { login, signup, instagram_login } from '../api/api'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Circles } from 'react-loader-spinner'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [isSignup, setIsSignup] = useState(false)
  const [loading, setLoading] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  const handleAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = isSignup ? await signup(data) : await login(data)
      console.log({ data: response.session.access_token })
      localStorage.setItem('accessToken', response.session.access_token)
      Swal.fire({
        icon: 'success',
        title: response.message,
        timer: 2000,
        showConfirmButton: false,
      })
      setTimeout(() => {
        window.location.reload()
        navigate('/dashboard')
      }, 500)
    } catch (error) {
      console.error('Error:', error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Something went wrong! Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleInstagramLogin = () => {
    instagram_login()
  }

  const toggleMode = () => {
    setIsSignup(!isSignup)
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isSignup ? 'Sign Up' : 'Instagram Login'}
        </h1>
        <form className="flex flex-col mx-4" onSubmit={handleAuth}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Phone number, username, or email"
            value={data.email}
            onChange={handleChange}
            className="mb-4 p-2 border rounded"
          />
          <label htmlFor="password">Password</label>
          <div className="relative mb-4">
            <input
              type={passwordShown ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {passwordShown ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {loading && (
            <div className="flex justify-center mb-4">
              <Circles
                height="50"
                width="50"
                color="#4fa94d"
                ariaLabel="circles-loading"
                visible={true}
              />
            </div>
          )}
          {!loading && (
            <>
              <Button
                text={isSignup ? 'Sign Up' : 'Login account'}
                onclick={handleAuth}
              />
              <button
                type="button"
                className="my-4 py-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleInstagramLogin}
              >
                Login to Instagram account
              </button>
            </>
          )}
        </form>
        <p className="mt-4 text-center text-gray-600">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={toggleMode} className="text-blue-500 hover:underline">
            {isSignup ? 'Login' : 'Sign up'}
          </button>
        </p>
      </div>
    </section>
  )
}

export default Login
