import "./Home.css";
import "../../components/Header/Header.css";
import "../../utils/helpers.js";
import { Link } from "react-router-dom";

function Home({ posts, isLoading, error }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const modifyHtmlString = (html) => {
    return html.replace(
      /<a /g,
      '<a target="_blank" rel="noopener noreferrer" '
    );
  };

  return (
    <div className="home">
      <h1 className="home__title">Blog Posts</h1>
      <ul className="home__blogs">
        <p className="home__mobile-item">
          <Link to="/Profile">Profile</Link>
        </p>
        {posts.map((post) => (
          <li key={post.id} className="home__blog-card">
            <h2 className="home__blog-title">{post.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: modifyHtmlString(post.content),
              }}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
