import { Routes, Route, NavLink } from "react-router-dom";
import SpeechIcon from "./components/atoms/SpeechIcon";
import Footer from "./components/atoms/Footer";
import PostDetails from "./components/molecules/PostDetails";
import "./App.css";
import Home from "./Home";
import Posts from "./components/organisms/Posts";
import Contact from "./components/organisms/Contact";
import Confirmation from "./components/organisms/Confirmation";

function App() {
  return (
    <>
      <header className="bg-blue-500 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center">
          <SpeechIcon className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-bold">My Awesome Posts</h1>
        </div>
        <div className="flex space-x-4 mt-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `shared-class ${isActive ? " text-black" : "text-white"}`
            }
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `shared-class ${isActive ? " text-black" : "text-white"}`
            }
          >
            Posts
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `shared-class ${isActive ? " text-black" : "text-white"}`
            }
          >
            Contact us
          </NavLink>
        </div>
      </header>
      {/* my app pages goes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="*" element={<h1>Page does not Exist...!!!</h1>} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<b>Select a Post to see its content</b>} />
          <Route path=":postId" element={<PostDetails />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
