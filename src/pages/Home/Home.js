import "./Home.css";

function Home({ posts, isLoading, error }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home">
      <h1 className="home__title">Blog Posts</h1>
      <ul className="home__blogs">
        {posts.map((post) => (
          <li key={post.id} className="home__blog-card">
            <h2 className="home__blog-title">{post.title}</h2>
            <div className="home__blog-card-body">
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
