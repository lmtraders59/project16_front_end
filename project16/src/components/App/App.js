import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import AddEditBlog from "../../pages/AddEditBlog";
import Blog from "../../pages/Blog";
import About from "../../pages/About";
import NotFound from "../../pages/NotFound";

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/addEdit" component={AddEditBlog} />
        <Route exact path="/editBlog/:id" component={AddEditBlog} />
        <Route exact path="/blog/:id" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="*" component={NotFound} />
      </div>
    </Switch>
  );
}

export default App;
