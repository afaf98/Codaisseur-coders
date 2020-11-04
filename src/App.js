import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsFeed from "./components/PostFeed";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/postfeed" component={PostsFeed} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
