import React from "react";
import Banner from "./Banner";
import { MdLocalShipping, MdPayment, MdHub, MdBusiness } from "react-icons/md";
import {
  MdRocketLaunch,
  MdPublic,
  MdInventory,
  MdHome,
  MdHandshake,
  MdAssignmentReturn,
} from "react-icons/md";
import BrandMarquee from "./BrandMarquee";
import FeaturesSection from "./FeaturesSection";
import MarchantSection from "./MarchantSection";
import CustomerReviews from "./CustomersReviews";

const Home = () => {
  const workingProcess = [
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

  const services = [
    {
      icon: <MdRocketLaunch size={32} />,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      featured: false,
    },
    {
      icon: <MdPublic size={32} />,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      featured: true,
    },
    {
      icon: <MdInventory size={32} />,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      featured: false,
    },
    {
      icon: <MdHome size={32} />,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      featured: false,
    },
    {
      icon: <MdHandshake size={32} />,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      featured: false,
    },
    {
      icon: <MdAssignmentReturn size={32} />,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      featured: false,
    },
  ];

  return (
    <div>
      <Banner></Banner>
      {/* how it's works */}
      <section className="pt-10 max-w-6xl mx-auto">
        <h1 className=" mx-auto mb-4 text-xl font-bold">How it's works</h1>
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workingProcess.map((service, index) => (
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
      {/* our service section */}
      <section className="mt-10">
        <div
          className="py-20 px-4 rounded-3xl"
          style={{ backgroundColor: "#0f2d2d" }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Our Services</h2>
            <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-2xl p-7 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 ${
                  service.featured
                    ? "bg-[#a8d44f] text-gray-900"
                    : "bg-white text-gray-800 hover:bg-[#a8d44f]"
                }`}
              >
                {/* Icon bubble */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${
                    service.featured
                      ? "bg-white/30 text-gray-800"
                      : "bg-purple-100 text-purple-400"
                  }`}
                >
                  {service.icon}
                </div>

                <h3 className="font-bold text-base mb-3 leading-snug">
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.featured ? "text-gray-800" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* brand marquee */}
      <BrandMarquee></BrandMarquee>
      {/* featuresSection */}
      <FeaturesSection></FeaturesSection>
      {/* marchant satisfaction */}
      <MarchantSection></MarchantSection>
      {/* Customers review section */}
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Home;
