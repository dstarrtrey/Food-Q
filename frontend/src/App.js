import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ApolloProvider, ApolloConsumer, Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
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
import { IS_LOGGED_IN_QUERY } from './pages/Login';

const ADMIN_LOGOUT_MUTATION = gql`
  mutation ADMIN_LOGOUT_MUTATION {
    logout
  }
`;

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Query query={IS_LOGGED_IN_QUERY}>
          {({loading, error, data, client, refetch}) => {
            client.writeData({
              data: {
                fetchLoginState: refetch()
              }
            });
            return (
              <>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Login" component={() => <Login fetchLoginState={refetch}/>} />
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
                  <Mutation mutation={ADMIN_LOGOUT_MUTATION}>
                    {(logout) => <span onClick={() => {
                      logout().then(x => {
                        refetch();
                      });
                    }}>||Log Out||</span>}
                  </Mutation>
                  {loading ? <span>Loading...</span>
                    : <strong onClick={() => refetch()}>Logged in: {JSON.stringify(data.isLoggedIn)}</strong>}  
                </span>
              </>
            )}}
        </Query>
      </ApolloProvider>
    </Router>
  );
}

export default App;
