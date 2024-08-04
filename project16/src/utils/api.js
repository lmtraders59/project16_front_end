// const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? "https://api.project15.routesmaps.com"
//     : "http://localhost:3001";

// const handleServerResponse = (res) => {
//   if (res.ok) {
//     return res.json();
//   } else {
//     return Promise.reject(`Error: ${res.status}`);
//   }
// };

// const getItems = async () => {
//   const res = await fetch(`${baseUrl}/items`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return handleServerResponse(res);
// };

// const addItem = async (name, imageUrl, weather) => {
//   const res = await fetch(`${baseUrl}/items`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//     body: JSON.stringify({
//       name,
//       imageUrl,
//       weather,
//     }),
//   });
//   return handleServerResponse(res);
// };

// const deleteItem = async (id) => {
//   const res = await fetch(`${baseUrl}/items/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   return handleServerResponse(res);
// };

// const editUserInfo = async (name, avatar) => {
//   const res = await fetch(`${baseUrl}/users/me`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//     body: JSON.stringify({
//       name,
//       avatar,
//     }),
//   });
//   return handleServerResponse(res);
// };

// const addLike = async (id) => {
//   const res = await fetch(`${baseUrl}/items/${id}/likes`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   return handleServerResponse(res);
// };

// const removeLike = async (id) => {
//   const res = await fetch(`${baseUrl}/items/${id}/likes`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   return handleServerResponse(res);
// };

// export {
//   getItems,
//   addItem,
//   deleteItem,
//   baseUrl,
//   editUserInfo,
//   addLike,
//   removeLike,
//   handleServerResponse,
// };

export function getItems() {
  return new Promise((resolve, reject) => resolve([
    {
      id: "65f7368dfb74bd6a92114c85", // I just generated this at random from a mongodb id generator website
      title: "Some news article",
      url: "put some actual article URL here"
      // ...etc, whatever properties it's supposed to have
    },
    {
      ...another one
    },
    // and have however many you want to show on the saved-news page
  ])
}

export function saveArticle(article) { // article is a result from the NewsAPI
  return new Promise((resolve, reject) => {
    resolve({
      id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
      url: article,url, // Use whatever properties the newsAPI gives you, I just made these up
      title: article.title,
      imageUrl: article.imagUrl
      // whatever other properties from the newsAPI-given article object you saved to the database
   })
  }
}

