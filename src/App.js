import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsFeed from "./components/PostFeed";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/post/:id" component={PostPage} />
        <Route path="/post" component={PostsFeed} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
