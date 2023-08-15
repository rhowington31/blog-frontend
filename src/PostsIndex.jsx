export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div>
        {" "}
        className="row">
        {props.myPosts.map((post) => (
          <div className="col-4" key={post.id}>
            <div className="card posts p-0 my-2 mx-auto" style={{ width: "15rem " }}>
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">Body: {post.body}</p>
                <button onClick={() => props.onSelectPost(post)} className="btn btn-primary">
                  More info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
