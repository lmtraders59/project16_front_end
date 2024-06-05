import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import AddEditBlog from "../../pages/AddEditBlog";
import Blog from "../../pages/Blog";
import About from "../../pages/About";
import NotFound from "../../pages/NotFound";

function App() {
  return (
    <div className="App">
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
