import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, 'PP');

  // isLoading use korte na chaile data er initial value dite hobe nahole sudhu data likhlei hbe
  const { data: appointmentOptions = [], refetch, isLoading} = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(`https://doctors-portal-server-silk.vercel.app/appointmentOptions?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loading></Loading>
  }


  // useEffect(() => {
  //   fetch("https://doctors-portal-server-silk.vercel.app/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);

  return (
    <section className="my-16">
      <p className="text-secondary font-bold text-lg text-center">
        Available Appointments on {date}
      </p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
