export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.myPosts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>Body: {post.body}</p>
          <button onClick={() => props.onSelectPost(post)}>More info</button>
        </div>
      ))}
    </div>
  );
}
