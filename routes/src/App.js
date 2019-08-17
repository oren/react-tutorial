import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function Food() {
  return <h2>Food</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/food/">Food</Link>
            </li>
            <li>
              <Link to="/new-food/">New Food</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/food/" component={Food} />
        <Route path="/new-food/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;

