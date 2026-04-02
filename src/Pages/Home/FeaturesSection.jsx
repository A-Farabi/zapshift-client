import React from "react";
import trackingImg from "../../assets/Mislenious/live-tracking.png";
import safeDeliveryImg from "../../assets/Mislenious/customer-top.png";
import supportImg from "../../assets/Mislenious/safe-delivery.png";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      img: trackingImg,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      img: safeDeliveryImg,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 3,
      img: supportImg,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return ( 
  <div>
    <section className="py-12 px-4">
      {/* Dashed border wrapper */}
      <div className="max-w-4xl mx-auto border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col gap-5">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-2xl flex flex-col sm:flex-row items-center sm:items-stretch overflow-hidden shadow-sm"
          >
            {/* Image side */}
            <div className="w-full sm:w-48 shrink-0 flex items-center justify-center p-5">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-36 h-36 object-contain"
              />
            </div>
 
            {/* Divider */}
            <div className="hidden sm:block w-px bg-gray-200 my-6" />
 
            {/* Text side */}
            <div className="flex flex-col justify-center px-6 py-6 sm:py-0">
              <h3 className="text-teal-900 font-bold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  );
};

export default FeaturesSection;
