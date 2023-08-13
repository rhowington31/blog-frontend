import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostShowVisible, setIsPostShowVisible] = useState(false);
  const [currecntPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostShowVisible(true);
    setCurrentPost(post);
  };

  const handleHidePost = () => {
    setIsPostShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  <Modal show={true}>
    <p>TEST</p>
  </Modal>;

  return (
    <div>
      <PostsNew />
      <PostsIndex myPosts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostShowVisible} onClose={handleHidePost}>
        <div>
          <h3>Test</h3>
          <p>This is a test</p>
        </div>
      </Modal>
    </div>
  );
}
