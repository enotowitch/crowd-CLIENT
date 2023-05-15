import { Navigate, Route, Routes } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { authRoutes, publicRoutes } from "./routes";

// TODO
export default function AppRouter() {

	const { user } = useUser()

	return (
		<Routes>
			{user && authRoutes.map(({ path, Component }) =>
				<Route key={path} exact path={path} element={Component} />
			)}
			{publicRoutes.map(({ path, Component }) =>
				<Route key={path} exact path={path} element={Component} />
			)}

			<Route path="*" element={<Navigate to="/login" replace />} />
		</Routes>
	)
}