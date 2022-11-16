import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  // treatment is appointment option just differant name
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      appointmentDate: date,
      treatment: treatment.name,
      patient: name,
      slot,
      email,
      phone,
    };
    // Todo: send data to the server and once data is saved then close the modal and display toast
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking confirmed");
          refetch();
        }
        else{
          toast.error(data.message)
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 mt-10"
          >
            <input
              type="text"
              disabled
              value={date}
              className="input w-full input-bordered"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots?.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your name"
              className="input w-full input-bordered"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input w-full input-bordered"
            />
            <input
              className="input w-full btn btn-accent"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
