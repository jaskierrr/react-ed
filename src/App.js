import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import "./styles/app.css";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if(localStorage.getItem('auth')) {
			setIsAuth(true)
		}
		setIsLoading(false);
	}, [])

	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth,
			isLoading
		}}>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
