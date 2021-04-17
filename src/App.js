import React, {useEffect} from "react";
import  Header from './Header';
import Home from './Home';
import{ BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import './App.css';
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"


 const promise = loadStripe("pk_test_51IWz0mJimXtcBDb9Dsw05LHocJqDXlhGgHzfBLZsRyCt3A5qCd57xXhrjkH3SC7bIuTxSQ5NcmpfnpVz6rShAbgX00YJlcUUqv");

function App() {
  const [{}, dispatch] = useStateValue(); 
    useEffect(() => {
   auth.onAuthStateChanged(authUser => {
     console.log('THE USER IS >>>', authUser);

     if (authUser) {

       //user logged in
       dispatch({
         type: 'SET_USER',
         user: authUser
       })
     } else {
       //logged out
       dispatch({
        type: 'SET_USER',
        user: null
      })
     }
   })
  }, [])
  return (
    //BEM
    <Router>
    <div className="App">
      <Switch>
      <Route path="/login">
          <Login/>
      </Route> 
    <Route path="/checkout">
      <Header/>
          <Checkout/> 
      </Route> 
      <Route path="/payment">
      <Header/>
      <Elements stripe={promise}>
      <Payment/>
      </Elements>  
      </Route> 
      <Route path="/">
      <Header/> 
           <Home/> 
      </Route>
      </Switch> 
    </div>
    </Router> 
  );
}

export default App;
