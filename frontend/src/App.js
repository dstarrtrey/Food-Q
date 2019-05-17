import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import ClientList from "./pages/ClientList";
import Menu from "./pages/Menu";
import OwnerList from './pages/OwnerList';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/ClientList" component={ClientList} />
          <Route exact path="/OwnerList" component={OwnerList} />
          <Route exact path="/Menu" component={Menu} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
        <span>
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/ClientList">ClientList</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/OwnerList">OwnerList</Link>
        </span>
      </div>
    </Router>
  );
}

export default App;
