import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import User_posts from '../components/Post'
import { fetching_post } from '../api/api'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { Circles } from 'react-loader-spinner'

const Dashboard = () => {
  const [posts, setPosts] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [loadingPosts, setLoadingPosts] = useState(false)
  const [loadingLogout, setLoadingLogout] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      setLoadingPosts(true)
      try {
        const data = await fetching_post()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoadingPosts(false)
      }
    }
    fetchPosts()
  }, [])

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(URL.createObjectURL(file))
    }
  }

  const handleLogout = async () => {
    setLoadingLogout(true)
    try {
      localStorage.removeItem('accessToken')
      navigate('/')
    } catch (error) {
      console.error('Error during logout:', error)
    } finally {
      setLoadingLogout(false)
      window.location.reload()
    }
  }

  return (
    <>
      <div className='bg-gray-300 h-full'>
        <Navbar />
        {loadingPosts ? (
          <div className="flex justify-center items-center h-full">
            <Circles color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <User_posts posts={posts} />
        )}
        <div className="my-4">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {selectedImage && (
            <div className="my-4 mx-4 py-4">
              <img src={selectedImage} alt="Selected" className="w-[10vw] h-20 my-3 object-cover rounded" />
            </div>
          )}
        </div>
      </div>
      <Button classname={`flex justify-center px-8 my-10 mx-auto`} text={"Logout"} onclick={handleLogout} />
      {loadingLogout && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <Circles color="#00BFFF" height={80} width={80} />
        </div>
      )}
    </>
  )
}

export default Dashboard