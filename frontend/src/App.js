import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css"
// Components
import Page_State from "./components/Page_State";
<<<<<<< HEAD
import Home from "./components/Home"
=======
import Page_Top_Place from "./components/Page_Top_Place";
>>>>>>> a67a74d0042cae0687c180d2af350bb227918620

import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyArdj2c68cpKizabT8mcPeaqVYXk7f5Zcg",
  authDomain: "error404-travelindia.firebaseapp.com",
  projectId: "error404-travelindia",
  storageBucket: "error404-travelindia.appspot.com",
  messagingSenderId: "857769917861",
  appId: "1:857769917861:web:270d6221f47f5e37127c4c",
  measurementId: "G-9PLLDG648Z",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <>
      {/* // routers */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/states/:state" component={Page_State} />
          <Route exact path="/top-places/:place" component={Page_Top_Place} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
