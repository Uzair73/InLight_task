import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import User_posts from '../components/Post'
import { fetching_post } from '../api/api'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [posts, setPosts] = useState([])
  const [selectedImage, setSelectedImage] = useState(null) // New state for selected image
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetching_post()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(URL.createObjectURL(file)) // Create a preview URL
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    window.location.reload()
    navigate('/')
  }

  return (
    <>
      <div className='bg-gray-300 h-full'>
        <Navbar />
        <User_posts posts={posts} />
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
    </>
  )
}

export default Dashboard