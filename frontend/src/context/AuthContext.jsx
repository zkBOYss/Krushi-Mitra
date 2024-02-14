import { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../api";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const loginAction = async () => {
		try {
			const response = await fetch(`${API_URL}/auth/validate-token`, {
				credentials: "include",
			});

			if (!response.ok) {
				if (response.status === 401) {
					setUser(null);
				} else {
					throw new Error("Token Invalid");
				}
			} else {
				return response.json();
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const userData = await loginAction();
			setUser(userData);
		};
		fetchData();
	}, []);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
	const context = useContext(AuthContext);

	return context;
};
