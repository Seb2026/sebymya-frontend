import logo from "./logo.svg";
import "./App.css";
import AddPhoto from "./components/photos/AddPhoto";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ShowPhotos from "./components/photos/ShowPhotos";

function App() {
  return (
    <div className="App">
      <Link className="navbar" to="/addphoto">
        Add Photo
      </Link>
      <Link className="navbar" to="/">
        Home
      </Link>
      <Link className="navbar" to="/showphotos">
        All Photos
      </Link>

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/addphoto"
          render={(props) => <AddPhoto {...props} />}
        />
        <Route
          exact
          path="/showphotos"
          render={(props) => <ShowPhotos {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
