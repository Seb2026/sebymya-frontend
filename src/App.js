import logo from "./logo.svg";
import "./App.css";
import AddPhoto from "./components/photos/AddPhoto";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ShowPhotos from "./components/photos/ShowPhotos";
import Photos2018 from "./components/photos/Photos2018";
import Photos2019 from "./components/photos/Photos2019";
import Photos2020 from "./components/photos/Photos2020";
import Photos2021 from "./components/photos/Photos2021";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link className="navbar" to="/addphoto">
          Add Photo
        </Link>
        <Link className="navbar" to="/">
          Home
        </Link>
        <Link className="navbar" to="/showphotos">
          All Photos
        </Link>
        <Link className="navbar" to="/2018">
          2018
        </Link>
        <Link className="navbar" to="/2019">
          2019
        </Link>
        <Link className="navbar" to="/2020">
          2020
        </Link>
        <Link className="navbar" to="/2021">
          2021
        </Link>
      </div>

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
        <Route
          exact
          path="/2018"
          render={(props) => <Photos2018 {...props} />}
        />
        <Route
          exact
          path="/2019"
          render={(props) => <Photos2019 {...props} />}
        />
        <Route
          exact
          path="/2020"
          render={(props) => <Photos2020 {...props} />}
        />
        <Route
          exact
          path="/2021"
          render={(props) => <Photos2021 {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
