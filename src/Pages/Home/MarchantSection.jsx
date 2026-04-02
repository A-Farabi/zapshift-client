import React from 'react';
import bgWave from "../../assets/Mislenious/be-a-merchant-bg.png";      // the wave/mesh background
import boxImg from "../../assets/Mislenious/location-merchant.png";
import { Link } from 'react-router-dom';

const MarchantSection = () => {
    return (
        <div className='max-w-4xl mx-auto'>
            <section
      className="relative overflow-hidden rounded-2xl my-10 "
      style={{ backgroundColor: "#0d3535" }}
    >
      {/* Background wave image */}
      <img
        src={bgWave}
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />
 
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-12 md:py-10 gap-8">
        
        {/* Left: Text Content */}
        <div className="flex-1 max-w-lg">
          <h2 className="text-white font-bold text-2xl md:text-3xl leading-snug mb-4">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            We offer the lowest delivery charge with the highest value along with
            100% safety of your product. Our courier delivers your parcels in
            every corner of Bangladesh right on time.
          </p>
 
          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/register"
              className="btn border-none px-6 py-2 rounded-full font-semibold text-sm"
              style={{ backgroundColor: "#c6e44f", color: "#0d3535" }}
            >
              Become a Merchant
            </Link>
            <Link
              to="/earn"
              className="btn btn-outline px-6 py-2 rounded-full font-semibold text-sm text-white border-white hover:bg-white hover:text-teal-900"
            >
              Earn with ZapShift Courier
            </Link>
          </div>
        </div>
 
        {/* Right: Illustration */}
        <div className="shrink-0 w-64 md:w-72">
          <img
            src={boxImg}
            alt="Delivery box illustration"
            className="w-full object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
        </div>
    );
};

export default MarchantSection;