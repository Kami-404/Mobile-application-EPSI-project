import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Accueil from './components/screens/accueil/Accueil';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true }),
  })
);

test("The form to add a new article works correctly", async () => {
  const { getByPlaceholderText, getByText } = render(<Accueil />);

  const titleInput = getByPlaceholderText("Plant name");
  const descriptionInput = getByPlaceholderText("Description");
  const addButton = getByText("New");

  fireEvent.changeText(titleInput, "New plant name");
  fireEvent.changeText(descriptionInput, "Description of the new plant");

  fireEvent.press(addButton);

  expect(fetch).toHaveBeenCalledWith("http://localhost:3001/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New plant name",
      description: "Description of the new plant",
      photo: "",
    }),
  });
});
