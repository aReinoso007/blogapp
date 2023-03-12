import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import { React, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import EditPost from './pages/EditPost';

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
            <Route path="/signup" element={<Register />}/>
            <Route path="/" element={<Login />}  />
            <Route path="/home" element={<HomePage data={getData} />} />
            <Route path="/home/blog/:id" element={<BlogPost content={getBlogContent} />} />
            <Route path="/home/blog/edit/:id" element={<EditPost content={getBlogContent} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
export default App;