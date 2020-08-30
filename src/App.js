import React, { Component, Suspense } from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Nav from "./components/Navigation/Nav";
import Footer from "./components/Footer/Footer";
import Jobs from "./pages/Jobs/Jobs";
import EmptyPage from './components/404/404'
const Home = React.lazy(() => {
  return import("./pages/Home/Home");
});


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Suspense fallback={<Loader />}>
                    <Home />
                  </Suspense>
                );
              }}
            />
            <Route exact path="/jobs" component={Jobs} />
            <Route  component={EmptyPage} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
