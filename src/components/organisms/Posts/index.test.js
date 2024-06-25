import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Posts from "./index";

const mockPosts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
  { id: 5, title: "Post 5" },
];

beforeEach(() => {
  global.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockPosts),
    })
  );
});

afterEach(() => {
  global.fetch.mockClear();
});

describe("Posts Component", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <Posts />
      </Router>
    );
  });
  test("fetches and displays my posts", async () => {
    render(
      <Router>
        <Posts />
      </Router>
    );

    expect(screen.getByText(/Posts/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText("Post 1")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Post 2")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Post 3")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Post 4")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Post 5")).toBeInTheDocument());
  });

  test("renders NavLink when not active with correct classes", async () => {
    render(
      <Router>
        <Posts />
      </Router>
    );

    await waitFor(() => expect(screen.getByText("Post 1")).toBeInTheDocument());
    const link = screen.getByText("Post 1").closest("a");
    expect(link).toHaveClass("shared-class text-blue-600 bg-transparent");
  });

  test("renders NavLink when active with correct classes", async () => {
    render(
      <Router>
        <Posts />
      </Router>
    );

    await waitFor(() => expect(screen.getByText("Post 1")).toBeInTheDocument());
    const link = screen.getByText("Post 1").closest("a");
    waitFor(() => {
      userEvent.click(link);
      expect(link).toHaveClass("shared-class text-blue-600 bg-gray-400");
    });
  });
});
