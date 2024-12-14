const express = require('express')
// const pool = require('../db/db') 
// const axios = require('axios')

const router = express.Router()

// instagram api user post
// router.get('/instagram/posts', async (req, res) => {
//     const { user_id } = req.query
//     try {
//         const { rows } = await pool.query('SELECT instagram_token FROM users WHERE id = $1', [user_id])
//         if (rows.length === 0) {
//             return res.status(404).send('User not found or no token available')
//         }
//         const token = rows[0].instagram_token
//         const response = await axios.get(
//             `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token}`
//         )
//         const posts = response.data.data
//         for (const post of posts) {
//             await pool.query(
//                 'INSERT INTO posts (user_id, instagram_id, media_url, caption) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING',
//                 [user_id, post.id, post.media_url, post.caption]
//             )
//           }
//         res.json(posts)
//     } catch (error) {
//         console.error(error)
//         res.status(500).send('Error fetching posts')
//     }
// })

router.get('/instagram-posts', (req, res) => {
    const posts = [
      {
        id: 1,
        image_url: 'https://via.placeholder.com/300',
        caption: 'Enjoying the sunset 🌅',
      },
      {
        id: 2,
        image_url: 'https://via.placeholder.com/300/FF5733',
        caption: 'Great vibes at the beach 🏖️',
      },
      {
        id: 3,
        image_url: 'https://via.placeholder.com/300/33FF57',
        caption: 'Working hard or hardly working? 💻',
      },
      {
        id: 4,
        image_url: 'https://via.placeholder.com/300/5733FF',
        caption: 'Morning coffee vibes ☕',
      },
      {
        id: 5,
        image_url: 'https://via.placeholder.com/300/33FFF3',
        caption: 'Adventure time 🚀',
      },
    ]
  
    return res.json(posts)
  })
  
module.exports = router
