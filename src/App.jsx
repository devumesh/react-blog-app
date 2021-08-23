import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import Home from './components/Home/Home.component';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateBlog from './components/CreateBlog/CreateBlog';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Page404 from './components/Page404/Page404';

function App() {
  return (
  <>
    <Router>
      <div className="container mx-auto px-4">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <CreateBlog />
          </Route>
          <Route exact path="/blog/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
  );
}

export default App;
