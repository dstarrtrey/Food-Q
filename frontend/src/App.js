import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { ApolloProvider, Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import client from './_client';
>>>>>>> fddfa989525de6d245c81b6d27d3e195f92c57d2
import Home from "./pages/Home";
import Login from "./pages/Login";
import ClientList from "./pages/ClientList";
import Menu from "./pages/Menu";
import AdminList from './pages/AdminList';
import TestLoginGate from './pages/TestLoginGate';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';
import Navbar from "./components/NavBar/index";
import Wrapper from "./components/Wrapper/index";
import { IS_LOGGED_IN_QUERY } from './pages/Login';

export const ADMIN_LOGOUT_MUTATION = gql`
  mutation ADMIN_LOGOUT_MUTATION {
    logout
  }
`;

export const MY_ID_QUERY = gql`
  query MY_ID_QUERY {
    myId
  }
`;

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
        <Query query={IS_LOGGED_IN_QUERY}>
          {({loading, error, data, refetch}) => {
            return (
              <>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Login" component={() => <Login fetchLoginState={refetch} />} />
                  <Route path="/ClientList/:id" component={ClientList} />
                  <Route exact path="/AdminList" component={AdminList} />
                  <Route exact path="/testAdminList" component={() => <TestLoginGate />} />
                  <Route exact path="/Menu" component={Menu} />
                  <Route component={NoMatch} />
                </Switch>
                <Footer />
                {/* Placeholder links for ease in navigating */}
                <span>
                  <Link to="/">Home</Link>
                  <Link to="/Login">Login</Link>
                  <Link to="/ClientList/cjw9fz5xhjlcu0b12scf10c6d">ClientList</Link>
                  <Link to="/AdminList">AdminList</Link>
                  <Link to="/Menu">Menu</Link>
                  <Link to="/testAdminList">Test</Link>
                  {loading ? <span>Loading...</span>
                    : error ? <span>Error: {error.message}</span> : <strong>Logged in: {JSON.stringify(data.isLoggedIn)}</strong>} 
                  <Mutation mutation={ADMIN_LOGOUT_MUTATION}>
                    {(logout) => <button onClick={() => {
                      logout().then(() => {
                        refetch();
                        window.location.reload();
                      });
                    }}>Log Out</button>}
                  </Mutation>
                </span>
                <Query query={MY_ID_QUERY}>
                  {({ loading, error, data, refetch}) => {
                    if (loading) return <span>Loading...</span>
                    if (error) return <span>Error: {error.message}</span>
                    return <button onClick={() => refetch()}>{data.myId}</button>
                  }}
                </Query>
              </>
            )
          }}
        </Query>
      </ApolloProvider>
>>>>>>> fddfa989525de6d245c81b6d27d3e195f92c57d2
    </Router>
  );
}

export default App;
