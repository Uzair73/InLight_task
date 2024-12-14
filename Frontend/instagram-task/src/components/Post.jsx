import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ posts }) => {
  if (!Array.isArray(posts)) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 container mx-1">
      {posts.map((post, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded shadow">
          <img
            src={post.image_url}
            alt="Instagram Post"
            className="w-full h-48 object-cover rounded"
          />
          <p className="mt-2">{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

Post.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ),
};

export default Post;
