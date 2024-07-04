import axios from "axios";

const API_KEY = "AIzaSyCOILWuoOgG7mZguLKaqglSRfEYHvIQ8xc";
const BLOG_ID = "4384002785269825300";

export const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching blog posts", error);
    return [];
  }
};
// https://www.googleapis.com/blogger/v3/blogs/${4384002785269825300}/posts?key=${AIzaSyCOILWuoOgG7mZguLKaqglSRfEYHvIQ8xc}

 
// export const fetchBlogPostsFromBloggerAPI = async () => {
//   try {
//     const response = await fetch('https://www.googleapis.com/blogger/v3/blogs/BLOG_ID/posts?key=API_KEY');
//     const data = await response.json();
//     return data.items || [];
//   } catch (error) {
//     console.error("Error fetching blog posts: ", error);
//     return [];
//   }
// };
