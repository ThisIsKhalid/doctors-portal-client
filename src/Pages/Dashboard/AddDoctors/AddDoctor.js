import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddDoctor = (data) => {
    console.log(data);
  };

  return (
    <div className="w-96 p-7 shadow-md">
      <h1 className="text-3xl">Add A Doctor</h1>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
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
            <span className="label-text">Speciality</span>
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Pick a Speciality</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>

        <input
          className="btn btn-accent w-full max-w-xs mt-5"
          type="submit"
          value="Add DOCTOR"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
