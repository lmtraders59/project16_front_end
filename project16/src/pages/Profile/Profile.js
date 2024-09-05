import React from "react";
import "./Profile.css";
// import Blog from "../Blog/Blog";
// import { SideBar } from "../SideBar/SideBar.js";

const Profile = ({ posts, isLoggedIn }) => {
  // const blogs = [
  //   {
  //     title: "First Blog",
  //     description: "This is the first blog description",
  //     image: "../../images/tobias-reich-7bXY-DW4MqM-unsplash.jpg",
  //   },
  //   {
  //     title: "Second Blog",
  //     description: "This is the second blog description",
  //     image: "./images/alexander-zaytsev-92YMxPAllKY-unsplash.jpg",
  //   },
  //   {
  //     title: "Third Blog",
  //     description: "This is the third blog description",
  //     image: "./images/daniel-deiev-4eojU9_FrkE-unsplash.jpg",
  //   },
  //   {
  //     title: "Fourth Blog",
  //     description: "This is the fourth blog description",
  //     image: "./images/ian-dooley-TevqnfbI0Zc-unsplash.jpg",
  //   },
  //   {
  //     title: "Fifth Blog",
  //     description: "This is the fifth blog description",
  //     image: "./images/kalen-emsley-7bwQXzbF6KE-unsplash.jpg",
  //   },
  // ];

  return (
    <div className="profile">
      {/* <SideBar  /> */}
      <div className="profile__sidebar">
        <h1 className="profile__title">Blog Posts</h1>
        <p className="sidebar__logout">Log out</p>
      </div>
      <div className="profile__blogs">
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Profile;

// function Home() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     const getBlogPosts = async () => {
//       try {
//         const fetchedPosts = await fetchBlogPosts();
//         setPosts(fetchedPosts);
//         const sanitizedContent = DOMPurify.sanitize(post.content);
//         setContent(sanitizedContent);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getBlogPosts();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="Home">
//       <h1 className="home__title">Blog Posts</h1>
//       <ul className="home__blogs">
//         {posts.map((post) => (
//           <li key={post.id}>
//             {post.title}
//             <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Home;
