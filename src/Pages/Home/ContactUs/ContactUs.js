import React from 'react';
import bdImg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton';

const ContactUs = () => {
    return (
      <div
        className="my-16 text-center py-12"
        style={{ background: `url(${bdImg})` }}
      >
        <div className="mb-10">
          <h4 className="text-lg font-bold text-primary">Contact Us</h4>
          <h1 className="text-3xl font-medium text-white">
            Stay connected with us
          </h1>
        </div>
        <form>
          <input
            type="email"
            placeholder="example@gamil.com"
            className="input w-full max-w-xs mb-5"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-xs mb-5"
          />{" "}
          <br />
          <textarea
            className="textarea w-full max-w-xs mb-5"
            placeholder="Message"
          ></textarea> <br />
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    );
};

export default ContactUs;