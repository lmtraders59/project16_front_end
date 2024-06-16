import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home.js";
import AddEditBlog from "../../pages/AddEditBlog/AddEditBlog.js";
import Blog from "../../pages/Blog/Blog.js";
import About from "../../pages/About/About.js";
import NotFound from "../../pages/NotFound/NotFound.js";
import { Profile } from "../../pages/Profile/Profile.js";
import Header from "../Header/Header";
import { SignUp } from "../../pages/SignUp/SignUp.js";
import { LogIn } from "../../pages/LogIn/LogIn.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-Blog" component={AddEditBlog} />
          <Route exact path="/add-Blog/:id" component={AddEditBlog} />
          <Route exact path="/blog/:id" component={Blog} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/signup" component={Signup} />
//         <Route path="/about" component={About} />
//         {/* Add other routes here */}
//       </Switch>
//     </Router>
//   );
// };
