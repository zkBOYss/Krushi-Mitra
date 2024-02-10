import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await response.json();

    if (response.status === 200) {
      alert("Login Success!");
      navigate("/");
      window.location.reload();
    } else {
      alert("login failed");
      console.log(response.error);
    }
    return body;
  });

  return (
    <div className="h-screen flex items-center ">
      <div></div>
      <form
        className="flex flex-col gap-5 max-w-md mx-auto border border-lightgray shadow- p-16 rounded-xl"
        onSubmit={onSubmit}
      >
        <h2 className="text-3xl text-lightred font-bold font-grotesk mx-auto">
          Sign In
        </h2>
        {/* Seprator */}
        <div className="h-px my-1 bg-black bg-opacity-50 border-0 w-full"></div>
        <label className="text-lightgray font-grotesk text-md font-bold flex-1">
          Email
          <input
            type="email"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("email", {
              required: "Field is required",
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </label>
        <label className="text-lightgray font-grotesk text-md font-bold flex-1">
          Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("password", {
              required: "Field is required",
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </label>
        <span className="flex mx-auto">
          <button
            type="submit"
            className="text-lg bg-green-600 py-1 px-6 text-black font-semibold font-grotesk
					rounded-lg  hover:bg-green-700  hover:text-white"
          >
            Login
          </button>
        </span>
        <span className="flex max-sm:flex-col max-sm:items-center text-sm font-poppins mx-auto">
          Not Registered?{" "}
          <Link to="/register" className="font-semibold underline">
            Create an account here.
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
