import Home from "./Pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import BlogContent from "./components/BlogContent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BlogContent" element={<BlogContent />} />
      </Routes>
    </div>
  );
}

export default App;
