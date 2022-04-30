import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Category from "./pages/category/Category";

const App = () => {
  let admin = null

  if (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser) {
    admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.role === ("Admin" || "SuperAdmin")
  }

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {admin ? <Redirect to="/"/> : <Login />}
        </Route>
        { admin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/" >
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newProduct">
                <NewProduct />
              </Route>
              <Route path="/category">
                <Category />
              </Route>
            </div>
          </>)
        }
      </Switch>
    </Router>
  );
}

export default App;