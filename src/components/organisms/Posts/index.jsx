import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <div className="text-blue-500">{post.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
