import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ClientList from "./pages/CilentList";
import Menu from "./pages/Menu";
import AdminList from './pages/AdminList';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';
import Navbar from "./components/NavBar/index";
import Wrapper from "./components/Wrapper/index";

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
          <span>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/CilentList">ClientList</Link>
            <Link to="/Adminlist">AdminList</Link>
            <Link to="/Menu">Menu</Link>
          </span>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
