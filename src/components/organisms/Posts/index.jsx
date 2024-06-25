import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <NavLink
              to={`${post.id}`}
              className={({ isActive }) =>
                `shared-class text-blue-600 ${
                  isActive ? " bg-gray-400" : " bg-transparent"
                }`
              }
            >
              {post.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Posts;
