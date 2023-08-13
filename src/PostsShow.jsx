export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <p>Author: {props.post.author} </p>
      <p>Title: {props.post.title} </p>
      <p>Content: {props.post.content} </p>
    </div>
  );
}
