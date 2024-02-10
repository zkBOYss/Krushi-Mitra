import ProductDetails from "../forms/ManageProductForm/ProductDetails";

const AddProduct = () => {
	const handleSave = (data) => {
		console.log("data: ", data);
	};
	return <ProductDetails onSave={handleSave} />;
};

export default AddProduct;
