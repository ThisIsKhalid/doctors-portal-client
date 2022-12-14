import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { login } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const token = useToken(loginUserEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data, e) => {
    // console.log(data);
    login(data.email, data.password)
      .then((res) => {
        toast.success("Successfully login");
        // console.log(res.user);
        setLoginUserEmail(data.email);
        
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-[600px]  flex items-center justify-center">
      <div className="w-96 p-7 shadow-md">
        <h2 className="text-xl text-center">Log In</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 chracters long",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full max-w-xs"
            type="submit"
            value="Login"
          />
        </form>
        <p className="mt-5 text-center">
          New to Doctors Portal?{" "}
          <Link to="/register" className="text-secondary">
            {" "}
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full max-w-xs">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
