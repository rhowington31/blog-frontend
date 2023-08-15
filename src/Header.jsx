export function Header() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: "#586b8a" }}>
      <a id="brand-name" className="navbar-brand mx-4" href="#">
        Menu
      </a>
      <button
        className="navbar-toggler mx-4"
        type="button"
        data-toggle="collapse"
        data-target="navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#posts-index">
              All Posts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#posts-new">
              New Post
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// <header>
//   <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
// </header>
