import React from "react";
import PostItem from "./PostItem";


const PostList = ({posts, title, remove}) => {

    if(!posts.length) {
        return (
            <h1 style={{ textAlign: "center", paddingTop: "40px" }}>Посты не были найдены!</h1>
        )
    }


  return (
    <div>
      <div style={{ textAlign: "left", paddingTop: "40px",marginLeft: "20px", fontSize: "32px" }}>{title}</div>
      {posts.map((post, index) => (
        <PostItem key={index} remove={remove} number={index + 1} post={post} />
      ))}
      
    </div>
  );
};

export default PostList;
