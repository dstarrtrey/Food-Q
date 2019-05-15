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
          <Route exact path="/login" component={Login} />
          <Route exact path="/list" component={ClientList} />
          <Route exact path="/adminlist" component={OwnerList} />
          <Route exact path="/menu" component={Menu} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
        <span>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/list">ClientList</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/adminlist">OwnerList</Link>
        </span>
      </div>
    </Router>
  );
}

export default App;
