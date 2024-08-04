// import { baseUrl, handleServerResponse } from "./api";

// const signUp = async (name, avatar, email, password) => {
//   const res = await fetch(`${baseUrl}/signup`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name,
//       avatar,
//       email,
//       password,
//     }),
//   });
//   return handleServerResponse(res);
// };

// const signIn = async (email, password) => {
//   const res = await fetch(`${baseUrl}/signin`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   });
//   return handleServerResponse(res);
// };

// const checkToken = async (token) => {
//   const res = await fetch(`${baseUrl}/users/me`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${token}`,
//     },
//   });
//   return handleServerResponse(res);
// };

// export { signUp, signIn, checkToken };


export const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example,com", id: "fake-id" },
    });
  });
};