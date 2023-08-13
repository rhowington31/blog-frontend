export function Header() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg" style={{ "background-color": "#023020" }}>
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        classNmae="navbar-toggler"
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
            <a className="nav-link" href="#recipes-index">
              All Recipes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#recipes-new">
              New Recipe
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
