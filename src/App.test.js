import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  test("render my heading title", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const titleElement = screen.getByText(/My Awesome Posts/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders Home and Posts links", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole("link", { name: /Home/i });
    const postsLink = screen.getByRole("link", { name: /Posts/i });
    expect(homeLink).toBeInTheDocument();
    expect(postsLink).toBeInTheDocument();
  });

  test("navigates to Home page on link click", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole("link", { name: /Home/i });
    userEvent.click(homeLink);
    const homePageElement = screen.getByText(/Welcome to the React Router v6/i);
    expect(homePageElement).toBeInTheDocument();
  });

  test("navigates to Posts page on link click", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const postsLink = screen.getByRole("link", { name: /Posts/i });
    waitFor(() => {
      userEvent.click(postsLink);
      const postsPageElement = screen.getByText(/Posts/i);
      expect(postsPageElement).toBeInTheDocument();
    });
  });
});
