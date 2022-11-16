import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        // console.log(res.user);
        updateUserProfile({
          displayName: data.name,
        })
          .then(() => {
            toast.success("Register successfull");
            navigate("/");
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="h-[600px]  flex items-center justify-center">
      <div className="w-96 p-7 shadow-md">
        <h2 className="text-xl text-center">Register</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
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
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase letter,special characcter and number",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent w-full max-w-xs mt-5"
            type="submit"
            value="Register"
          />
        </form>
        <p className="mt-5 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-secondary">
            {" "}
            Login
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

export default Register;
