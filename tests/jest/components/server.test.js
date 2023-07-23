const fetch = require("node-fetch");

test("The server correctly processes the POST request to add an article", async () => {
  const response = await fetch("http://localhost:3001/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Article Title",
      description: "Article Description",
      photo: "",
    }),
  });

  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data).toEqual({ success: true });
});
