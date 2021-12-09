import SingleProduct from "./pages/SingleProduct";
import Home from "./pages/Home"
import { Register } from "./pages/register/Register";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
import {ProductList } from "./pages/ProductList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Success } from "./pages/Success";
import {useSelector} from "react-redux"



function App() {
  const user=useSelector(state => state.user.currentUser)
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
          {user ? <Home/>: <Register/>}
          </Route>
          <Route path="/login">
          {user ? <Redirect to="/"/>:<Login/>}
          </Route>
          <Route path="/register">
          {user ? <Redirect to="/"/>:<Register/>}
          </Route>
          <Route path="/products/:category">
          <ProductList/>
          </Route>
          <Route path="/product/:id">
          <SingleProduct/>
          </Route>
          <Route path="/cart">
          <Cart/>
          </Route> 
          <Route path="/success">
          <Success/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
