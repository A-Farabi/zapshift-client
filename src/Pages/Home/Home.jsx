import React from "react";
import Banner from "./Banner";
import { MdLocalShipping, MdPayment, MdHub, MdBusiness } from "react-icons/md";

const Home = () => {
  const services = [
    {
      icon: <MdLocalShipping size={40} />,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <MdPayment size={40} />,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <MdHub size={40} />,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <MdBusiness size={40} />,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div>
      <Banner></Banner>
      {/* how it's works */}
      <section className="py-16 px-4 bg-gray-50">
        <h1 className="max-w-6xl mx-auto mb-4 text-xl font-bold">How it's works</h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl p-6"
            >
              <div className="text-[#03373D] mb-4">{service.icon}</div>
              <h3 className="font-bold text-gray-800 text-base mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
