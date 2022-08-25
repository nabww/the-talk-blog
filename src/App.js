import Home from "./Pages/Home";
// import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import BlogContent from "./components/BlogContent";
import AddNewBlog from "../src/Pages/addNewBlog";
// import About from "./components/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BlogContent" element={<BlogContent />} />
        <Route path="/addnew" element={<AddNewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
