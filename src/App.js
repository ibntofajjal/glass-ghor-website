import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import AllOrders from "./Pages/Dashboard/AllOrders/AllOrders";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import Pay from "./Pages/Dashboard/Pay/Pay";
import Review from "./Pages/Dashboard/Review/Review";
import Glasses from "./Pages/Glasses/Glasses/Glasses";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Home/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Login/Register/Register";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Buy from "./Pages/Shared/Buy/Buy/Buy";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/glasses">
              <Glasses></Glasses>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/allOrders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/buy/:glassID">
              <Buy></Buy>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
