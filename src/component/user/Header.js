const Header = () => {
  return (
    <>
      <header className="main-header">
        <section className="brand">
          <span>DevNode.io</span>
        </section>
        <ul className="menu">
          <li>
            <a href="#">Blog</a>
          </li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <section>
          <button className="write-btn">
            <a href="/write-blog.html">
              Write
              <i className="fa fa-edit"></i>
            </a>
          </button>
          <button className="write-btn">
            <a href="/login.html">
              Login
              <i className="fa fa-user"></i>
            </a>
          </button>
        </section>
      </header>
    </>
  );
};
export default Header;
