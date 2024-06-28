import axios from "axios";

const API_KEY = "YOUR_API_KEY";
const BLOG_ID = "YOUR_BLOG_ID";

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
