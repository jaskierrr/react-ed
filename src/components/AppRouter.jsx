import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router/routes";
import { useContext } from "react/cjs/react.development";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
	const {isAuth, isLoading} = useContext(AuthContext);
	console.log(isAuth);

	if(isLoading) {
		return <Loader/>
	}

	return isAuth ? (
		<Routes>
			{privateRoutes.map((route) => (
				<Route
					key={route.path}
					element={<route.element />}
					path={route.path}
					exact={route.exact}
				/>
			))}
			<Route path="*" element={<Navigate replace to="/posts" />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route) => (
				<Route
				key={route.path}
				element={<route.element />}
				path={route.path}
				exact={route.exact}
				/>
				))}
			<Route path="*" element={<Navigate replace to="/login" />} />
		</Routes>
	);

};


export default AppRouter;
