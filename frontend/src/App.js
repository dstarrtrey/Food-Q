import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
>>>>>>> 84c1b23b3062164c8de70c984aff9d05ba8581f9
=======
import { ApolloProvider } from 'react-apollo';
import client from './_client';
>>>>>>> 254624432e4498e40922c1a604fe2b423da30458
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
<<<<<<< HEAD
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
=======
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
          {/* Placeholder links for ease in navigating */}
          <span>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/ClientList">ClientList</Link>
            <Link to="/AdminList">AdminList</Link>
            <Link to="/Menu">Menu</Link>
          </span>
        </div>
      </ApolloProvider>
>>>>>>> 84c1b23b3062164c8de70c984aff9d05ba8581f9
    </Router>
  );
}

export default App;
