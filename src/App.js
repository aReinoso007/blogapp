import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import { React, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import EditPost from './pages/EditPost';
import RequireAuth from "./components/RequireAuth";
import AddPost from "./pages/AddPost";

function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog);
  }
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* rutas publicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />

          {/*Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<HomePage data={getData} />} />
            <Route path="/home/blog/:id" element={<BlogPost content={getBlogContent} />} />
            <Route path="/home/blog/edit/:id" element={<EditPost content={getBlogContent} />} />
            <Route path="/home/blog/add" element={<AddPost />}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;