import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import { React, useState } from "react";

function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog);
  }
  return (
    <div>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage data={getData} />} />
            <Route path="/blog/:id" element={<BlogPost content={getBlogContent} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
export default App;