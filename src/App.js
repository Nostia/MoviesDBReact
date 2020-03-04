import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Provider } from 'react-redux'
import store from './configureStore'
// import Navigation from "./components/Navigation";
import Content from "./components/Content";
import MoviesList from "./components/MoviesList/MoviesList";
import MoviePage from "./components/MoviePage/MoviePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Provider store={store}>
    <Router>
      <div className="App">
        <Header></Header>
        <div>
          {/* <Navigation></Navigation> */}

          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/movie/:id" component={MoviePage} />
          </Switch>
        </div>
      </div>
    </Router>
      </Provider>
  );
}

export default App;
