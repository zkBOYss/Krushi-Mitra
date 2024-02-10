import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Layout from "./layout/layout";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import EventDetails from "./forms/ManageEventForm/EventDetails";
import Events from "./pages/Events";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<Home />
						</Layout>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<Layout>
							<Dashboard />
						</Layout>
					}
				/>
				<Route
					path="/register"
					element={
						<Layout>
							<Register />
						</Layout>
					}
				/>
				<Route
					path="/sign-in"
					element={
						<Layout>
							<SignIn />
						</Layout>
					}
				/>
				<Route
					path="/add-products"
					element={
						<Layout>
							<AddProduct />
						</Layout>
					}
				/>
				<Route
					path="/events"
					element={
						<Layout>
							<Events />
						</Layout>
					}
				/>
				<Route
					path="/events/add-events"
					element={
						<Layout>
							<EventDetails />
						</Layout>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
