import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
