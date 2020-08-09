const BASE_URL = "http://localhost:5000";

export const callApi = async ({ method = "GET", url, body }) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: body && JSON.stringify(body)
  });
  console.log(response);
  return await response.json();
};
