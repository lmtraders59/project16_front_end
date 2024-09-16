// import DOMPurify from "dompurify";

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
          <li key={post.id}>
            {post.title}
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </li>
        ))}
      </ul>
      {/* {posts.map((post) => (
          <Blog 
            key={post.id} 
            title={post.title} 
            description={dangerouslySetInnerHTML={{ __html: post.content }}}>
          />
        ))} */}
    </div>
  );
}

export default Home;
