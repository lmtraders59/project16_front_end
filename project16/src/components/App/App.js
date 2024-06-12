import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home.js";
import AddEditBlog from "../../pages/AddEditBlog/AddEditBlog.js";
import Blog from "../../pages/Blog/Blog.js";
import About from "../../pages/About/About.js";
import NotFound from "../../pages/NotFound/NotFound.js";
// import "../Profile/Profile.css";
// import Profile from "../Profile/Profile.js";
import Header from "../Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addEdit" component={AddEditBlog} />
        <Route exact path="/editBlog/:id" component={AddEditBlog} />
        <Route exact path="/blog/:id" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
