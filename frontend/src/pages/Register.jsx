import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SignUp from "../assets/Sign_Up.svg";
import { API_URL } from "../api";

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        alert("Registration Failed!");
        throw new Error(responseBody.message);
      } else {
        alert("Registration Success!");
        navigate("/sign-in");
      }
    } catch (error) {
      console.error(error);
    }
  });

  // const roleType = ["buyer", "seller"];
  // const typeWatch = watch("type");
  return (
    <form className="flex flex-col gap-5 " onSubmit={onSubmit}>
      <div className="gap-2 flex flex-col">
        <h2 className="text-3xl font-bold font-grotesk text-lightgreen">
          Create an Account
        </h2>
        <p className="font-poppins text-lg max-sm:text-base">
          Quick, secure account creation: Easy steps to access all features.
        </p>
        {/* Seprator */}
        <div className="h-px my-1 bg-black w-full"></div>
      </div>
      {/* Sign In Container */}
      <div className="p-4 gap-2 border border-lightgray font-grotesk rounded-lg ">
        <div className="flex max-sm:flex-col">
          <div className="w-1/2 max-sm:w-full">
            <img
              src={SignUp}
              alt="Sign Up"
              className="w-full h-full pointer-events-none"
            />
          </div>
          <div className="w-1/2 max-sm:w-full flex-col p-4 border rounded-lg">
            <div className="gap-2 flex flex-col">
              <h2 className="text-2xl font-bold font-grotesk text-black">
                Enter your details
              </h2>
              {/* Seprator */}
              <div className="h-px my-1 bg-black  w-full"></div>
            </div>

            <label className="text-gray-700 text-lg  font-semibold flex-1">
              Username
              <input
                type="text"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("username", {
                  required: "Field is required",
                })}
              />
              {errors.username && (
                <span className="text-red-500">{errors.username.message}</span>
              )}
            </label>
            <label className="text-gray-700 text-lg  font-semibold flex-1">
              First Name
              <input
                type="text"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("firstName", {
                  required: "Field is required",
                })}
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
            </label>
            <label className="text-gray-700 text-lg  font-semibold flex-1">
              Last Name
              <input
                type="text"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("lastName", {
                  required: "Field is required",
                })}
              />
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}
            </label>
            <label className="text-gray-700 text-lg  font-semibold flex-1">
              Mobile Number
              <input
                type="tel"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("mobileNumber", {
                  required: "Field is required",
                })}
              />
              {errors.mobileNumber && (
                <span className="text-red-500">
                  {errors.mobileNumber.message}
                </span>
              )}
            </label>
            <label className="text-gray-700 text-lg  font-semibold flex-1">
              Email
              <input
                type="email"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("email", {
                  required: "Field is required",
                })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </label>
            <label className="text-gray-700 text-lg  font-semibold flex-1">
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
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </label>
            <label className="text-gray-700 text-lg  font-semibold flex-1">
              Confirm Password
              <input
                type="password"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("confirmPassword", {
                  validate: (val) => {
                    if (!val) {
                      return "Field is required";
                    } else if (watch("password") !== val) {
                      return "Your passwords do not match";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </label>
            <span className="items-center justify-center flex mt-4">
              <button
                type="submit"
                className="text-lg bg-green-600 py-1 px-6 text-white font-semibold font-grotesk
					rounded-lg  hover:bg-green-700 hover:text-white "
              >
                Create Account
              </button>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
