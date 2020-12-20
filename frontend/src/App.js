import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
// Components
import Page_State from "./components/Page_State";
import Home from "./components/Home";
import Page_Top_Place from "./components/Page_Top_Place";
import Bookings from "./components/Bookings";
import flights from "./assets/data/flight";
import hotels from "./assets/data/hotels";
import packages from "./assets/data/packages";
import firebase from "firebase";
import Contact from "./components/Contact";
import Guidelines from "./components/Guidelines";

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
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <>
      {/* // routers */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/states/:state" component={Page_State} />
          <Route exact path="/top-places/:place" component={Page_Top_Place} />
          <Route exact path="/book-hotels">
            <Bookings data={hotels} />
          </Route>
          <Route exact path="/book-flights">
            <Bookings data={flights} />
          </Route>
          <Route exact path="/book-package">
            <Bookings data={packages} />
          </Route>
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/covid-guidelines" component={Guidelines} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
