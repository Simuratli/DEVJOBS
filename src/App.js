import React, { Component, Suspense } from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Jobs from "./pages/Jobs/Jobs";

const EmptyPage = React.lazy(() => {
  return import("./components/404/404");
});

const Nav = React.lazy(() => {
  return import("./components/Navigation/Nav");
});

const Footer = React.lazy(() => {
  return import("./components/Footer/Footer");
});

const Home = React.lazy(() => {
  return import("./pages/Home/Home");
});


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         <Suspense fallback={<div>Loading...</div>}>
          <Nav />
         </Suspense>
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
        <Suspense fallback={<div>Loading...</div>}>
        <Footer />
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
