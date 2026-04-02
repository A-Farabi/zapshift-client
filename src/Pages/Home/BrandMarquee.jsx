import React from "react";
import Marquee from "react-fast-marquee";

const BrandMarquee = () => (
  <> 
  <div className="py-10 max-w-4xl mx-auto">
  <h1 className="font-bold text-xl text-[#03373D] text-center">We've helped thousands of sales teams</h1>
    <div className="overflow-hidden mt-5 whitespace-nowrap">
      <div className="flex animate-marquee gap-10">
        <img src="/src/assets/brands/amazon.png" className="h-12" />
        <img src="/src/assets/brands/casio.png" className="h-12" />
        <img src="/src/assets/brands/randstad.png" className="h-12" />
        <img src="/src/assets/brands/moonstar.png" className="h-12" />

        {/* duplicate for smooth loop */}
        <img src="/src/assets/brands/amazon.png" className="h-12" />
        <img src="/src/assets/brands/casio.png" className="h-12" />
        <img src="/src/assets/brands/randstad.png" className="h-12" />
        <img src="/src/assets/brands/moonstar.png" className="h-12" />
      </div>
    </div>
    </div>
  </>
);

export default BrandMarquee;
