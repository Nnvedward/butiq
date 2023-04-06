import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Success from "./pages/Success";
import Shop from "./pages/Shop";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/userRedux";

const App = () => {
	const currentUser = useSelector(selectCurrentUser);

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/shop">
					<Shop />
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
				<Route path="/success">
					<Success />
				</Route>
				<Route path="/register">
					{!!currentUser ? <Redirect to="/" /> : <Register />}
				</Route>
				<Route path="/Login">
					{!!currentUser ? <Redirect to="/" /> : <Login />}
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
