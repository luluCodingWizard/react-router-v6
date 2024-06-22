import { Routes, Route } from "react-router-dom";
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
      </header>
      {/* my app pages goes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
