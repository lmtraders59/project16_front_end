const API_KEY = "AIzaSyCOILWuoOgG7mZguLKaqglSRfEYHvIQ8xc";
const BLOG_ID = "4384002785269825300";

// export const fetchBlogPosts = async () => {
//   try {
//     const response = await axios.get(
//       `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`
//     );
//     return response.data.items;
//   } catch (error) {
//     console.error("Error fetching blog posts", error);
//     return [];
//   }
// };

export const fetchBlogPosts = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`
    );

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON from the response
    return data.items || []; // Return the items or an empty array if no items
  } catch (error) {
    console.error("Error fetching blog posts", error);
    return []; // Return an empty array on error
  }
};
