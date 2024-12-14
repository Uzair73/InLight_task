import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000';
const API_BASE_URL = 'https://in-light-task.vercel.app';

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    console.log({data: response.data});
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (email,password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`,email,password);
    console.log({data:response.data});
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const instagram_login = async () => {
  try {
    window.location.href = `${API_BASE_URL}/auth/instagram`;
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

export const fetching_post = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/post/instagram-posts`, {
    });
    const posts = response.data.map(post => ({
      image_url: post.image_url,
      caption: post.caption
    }));
    console.log({post_data: posts});
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};
