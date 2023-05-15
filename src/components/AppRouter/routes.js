import Dashboard from "../Dashboard/Dashboard"
import Home from "../Home/Home"

export const authRoutes = [
	{
		path: "/dashboard",
		Component: <Dashboard />
	}
]

export const publicRoutes = [
	{
		path: "/",
		Component: <Home />
	}
]