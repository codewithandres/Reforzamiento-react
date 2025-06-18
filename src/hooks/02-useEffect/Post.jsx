import React, { useEffect, useState } from 'react';

export const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(data => {
        if (!isCancelled) {
          alert('post as ready, updating state..');
          setPost(data);
          console.log(data);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  console.log('Getting Post..');

  return (
    <div>
      {post.map(p => (
        <p key={p.id}> {p.title} </p>
      ))}
    </div>
  );
};
