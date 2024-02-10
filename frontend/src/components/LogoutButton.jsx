const LogoutButton = () => {
	const logout = async () => {
		const response = await fetch("http://localhost:5000/api/auth/logout", {
			credentials: "include",
			method: "POST",
		});
		if (!response.ok) {
			throw new Error("Error during logging out!");
		} else {
			alert("Logged out successfully!");
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