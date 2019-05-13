import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import ClientList from "./pages/ClientList";
import Menu from "./pages/Menu";
import OwnerList from './pages/OwnerList';
import NoMatch from './pages/NoMatch';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/list" component={ClientList} />
          <Route exact path="/adminlist" component={OwnerList} />
          <Route exact path="/menu" component={Menu} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
