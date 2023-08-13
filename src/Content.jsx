import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostShowVisible, setIsPostShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostShowVisible(true);
    setCurrentPost(post);
    console.log(post);
  };

  const handleHidePost = () => {
    setIsPostShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <PostsNew />
      <PostsIndex myPosts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostShowVisible} onClose={handleHidePost}>
        <div>
          <h2>{currentPost.title}</h2>
          <p>Author: {currentPost.author} </p>
          <p></p>
          <p></p>
        </div>
      </Modal>
    </div>
  );
}
