import { Routes, Route, Link } from "react-router-dom";
import SpeechIcon from "./components/atoms/SpeechIcon";
import Footer from "./components/atoms/Footer";
import "./App.css";
import Home from "./Home";
import Posts from "./components/organisms/Posts";

function App() {
  return (
    <>
      <header className="bg-blue-500 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center">
          <SpeechIcon className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-bold">My Awesome Posts</h1>
        </div>
        <div class="flex space-x-4 mt-2">
          <Link
            to="/"
            class="rounded-md  px-3 py-2 text-sm font-medium text-white"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            to="/posts"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Posts
          </Link>
        </div>
      </header>
      {/* my app pages goes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route path="postdetails" element={<h1>My details goes here</h1>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
