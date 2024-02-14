import { API_URL } from "../api";
import { useAppContext } from "../context/AppContext";

const LogoutButton = () => {
	const { showToast } = useAppContext();
	const logout = async () => {
		const response = await fetch(`${API_URL}/api/auth/logout`, {
			credentials: "include",
			method: "POST",
		});
		if (!response.ok) {
			throw new Error("Error during logging out!");
		} else {
			showToast({ message: "Logged Out!", type: "SUCCESS" });
			window.location.reload();
		}
	};
	const handleClick = () => {
		logout();
	};
	return (
		<button
			onClick={handleClick}
			className="text-lg bg-lightgreen py-1 px-6 text-white font-semibold font-grotesk rounded-lg  hover:bg-lightred  hover:text-black transition-all"
		>
			Logout
		</button>
	);
};

export default LogoutButton;
