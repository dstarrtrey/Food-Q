import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
>>>>>>> 84c1b23b3062164c8de70c984aff9d05ba8581f9
import Home from "./pages/Home";
import Login from "./pages/Login";
import ClientList from "./pages/ClientList";
import Menu from "./pages/Menu";
import OwnerList from './pages/OwnerList';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';

// Sets up Apollo client to manage caching and graphql queries/mutations
const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'http://localhost:4000',
  request: operation => {
    operation.setContext({
      fetchOptions: {
        credentials: 'include',
      },
    });
  }
});

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
      </ApolloProvider>
>>>>>>> 84c1b23b3062164c8de70c984aff9d05ba8581f9
    </Router>
  );
}

export default App;
