const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getItems = async () => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return handleServerResponse(res);
};

const addItem = async (name, imageUrl, weather) => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  });
  return handleServerResponse(res);
};

const removeItem = async (id) => {
  const res = await fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return handleServerResponse(res);
};

export { getItems, addItem, removeItem, baseUrl, handleServerResponse };
