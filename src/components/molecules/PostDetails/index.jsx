import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div className="container mx-auto p-4">
      {post && (
        <>
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default PostDetails;
