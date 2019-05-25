import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './_client';
import Home from "./pages/Home";
import Login from "./pages/Login";
import ClientList from "./pages/ClientList";
import Menu from "./pages/Menu";
import AdminList from './pages/AdminList';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';
import Navbar from "./components/NavBar/index";
import Wrapper from "./components/Wrapper/index";

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/ClientList" component={ClientList} />
            <Route exact path="/AdminList" component={AdminList} />
            <Route exact path="/Menu" component={Menu} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
          {/* Placeholder for ease in navigating */}
          <span>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/ClientList">ClientList</Link>
            <Link to="/AdminList">AdminList</Link>
            <Link to="/Menu">Menu</Link>
          </span>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
