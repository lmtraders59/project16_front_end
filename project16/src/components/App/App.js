import "./App.css";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import AddEditBlog from "../../pages/AddEditBlog";
import Blog from "../../pages/Blog";
import About from "../../pages/About";
import NotFound from "../../pages/NotFound";

function App() {
  return (
    <div className="App">
      <Route exact path="/" element={Home} />
      <Route path="/addEdit" element={<AddEditBlog />} />
      <Route path="/editBlog/:id" element={<AddEditBlog />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </div>
  );
}

export default App;
