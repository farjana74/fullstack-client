import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/ManagesReview/ManagesReview';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Header from './Pages/Shared/Header/Header';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import AddReview from './Pages/UserDashboard/AddReview/AddReview';
import AllReview from './Pages/Home/AllReview/AllReview';
import ManagesReview from './Pages/ManagesReview/ManagesReview';
;



function App() {
  return (
    <div>

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/dashboard">
            <UserDashboard></UserDashboard>

          </Route>
          <Route exact path="/AddReview">
            <AddReview></AddReview>
          </Route>
          {/* <Route exact path="/allReview">
            <AllReview></AllReview>
          </Route> */}

          <Route exact path="/manages">
            <ManagesReview></ManagesReview>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
