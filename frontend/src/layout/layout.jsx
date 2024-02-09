import Header from "../components/Header";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="mx-20 py-5 flex-1 max-sm:mx-5">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;