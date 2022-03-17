import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  const user = true
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:Id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/"/> : <Register />}
        </Route>
        <Route path="/Login">
          {user ? <Redirect to="/"/> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
