import React from 'react';

const About = () => {
  return (
    <section className="mt-8 mb-29 px-6 py-12 font-urbanist bg-white text-base-content rounded-3xl shadow-sm">
      {/* Header Section */}
      <div className="mb-8 ml-3">
        <h2 className="text-4xl font-extrabold text-[#0d3b36] mb-4">About Us</h2>
        <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* DaisyUI Bordered Radio Tabs */}
      <div className="tabs tabs-border">
        
        {/* --- TAB 1: STORY --- */}
        <input 
          type="radio" 
          name="zapshift_about_tabs" 
          className="tab text-lg font-medium text-gray-400 checked:text-[#5b6e31] checked:font-bold" 
          aria-label="Story" 
          defaultChecked 
        />
        <div className="tab-content border-none bg-transparent pt-8 text-sm text-gray-600 space-y-6 leading-relaxed font-urbanist ">
          <p className='ml-3 max-w-[80%]'>
            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
            Over the years, our commitment to real-time tracking, efficient logistics, and customer-first 
            service has made us a trusted partner for thousands. Whether it's a personal gift or a 
            time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
          </p>
          <p className='ml-3 max-w-[80%]'>
            By leveraging modern routing algorithms and a dedicated fleet, we minimized transit gaps 
            and redefined what regional logistics could look like. What began as a local courier solution 
            swiftly evolved into a sophisticated supply network.
          </p>
          <p className='ml-3 max-w-[80%]'>
            Today, ZapShift stands at the forefront of modern logistics, bridging the gap between digital 
            convenience and physical efficiency, powered by an unyielding spirit to connect people and businesses.
          </p>
        </div>

        {/* --- TAB 2: MISSION --- */}
        <input 
          type="radio" 
          name="zapshift_about_tabs" 
          className="tab text-lg font-medium text-gray-400 checked:text-[#5b6e31] checked:font-bold" 
          aria-label="Mission" 
        />
        <div className="tab-content border-none bg-transparent pt-8 text-sm text-gray-600 space-y-6 leading-relaxed font-urbanist">
          <p className='ml-3 max-w-[80%]'>
            Our mission at ZapShift is to power global and local commerce through hyper-efficient, 
            transparent logistics solutions. We aim to take the friction out of shipping by offering 
            uncompromising precision, transparent live tracking, and accessible pricing structures.
          </p>
          <p className='ml-3 max-w-[80%]'>
            We are dedicated to building a greener future. By optimizing routes dynamically, we reduce 
            carbon footprints and strive to make eco-friendly courier services the mainstream industry standard.
          </p>
        </div>

        {/* --- TAB 3: SUCCESS --- */}
        <input 
          type="radio" 
          name="zapshift_about_tabs" 
          className="tab text-lg font-medium text-gray-400 checked:text-[#5b6e31] checked:font-bold" 
          aria-label="Success" 
        />
        <div className="tab-content border-none bg-transparent pt-8 text-sm text-gray-600 space-y-6 leading-relaxed font-urbanist">
          <p className='ml-3 max-w-[80%]'>
            Milestones matter, but keeping our promises matters more. To date, ZapShift has successfully 
            routed over 5 million packages across the region with an exemplary 99.4% on-time delivery rate.
          </p>
          <p className='ml-3 max-w-[80%]'>
            Our growth is validated by the satisfaction of over 50,000 active retail users and more than 
            1,200 commercial enterprise partners who trust our automated bulk fulfillment pipelines every single day.
          </p>
        </div>

        {/* --- TAB 4: TEAM & OTHERS --- */}
        <input 
          type="radio" 
          name="zapshift_about_tabs" 
          className="tab text-lg font-medium text-gray-400 checked:text-[#5b6e31] checked:font-bold" 
          aria-label="Team & Others" 
        />
        <div className="tab-content border-none bg-transparent pt-8 text-sm text-gray-600 space-y-6 leading-relaxed font-urbanist">
          <p className='ml-3 max-w-[80%]'>
            Behind every lightning-fast delivery is a brilliant network of logistics planners, developers, 
            support personnel, and dependable field courier agents. Our culture thrives on safety, diversity, 
            and technological empowerment.
          </p>
          <p className='ml-3 max-w-[80%]'>
            Beyond operations, we focus heavily on compliance, robust shipping insurance policies, and continuous 
            training frameworks to make sure your high-value assets remain protected throughout their journey.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;