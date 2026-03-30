import React from "react";
import { useFetch } from "../../hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const { data, isLoading, isError } = useFetch(API_URL);

  if (isError) {
    return (
      <div>
        <h2>{isError}</h2>
      </div>
    );
  }

  if(isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }


  return <div>
    <h1>Posts</h1>
    {data && data.length > 0 ? (
      <ul style={{display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px"}}>
        {data.map((post) => (
          <li key={post.id}>
            <div style={{display: 'flex', gap: '12px', paddingLeft: '12px'}}>
              <h3>{post.id}.</h3>
              <h3 >{post.title}</h3>
            </div>
            <p style={{paddingLeft: '32px'}}>{post.body}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No posts available.</p>
    )}
  </div>;
};

export default Posts;
