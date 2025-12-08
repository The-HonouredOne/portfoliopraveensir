import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#f7f7fb] py-12 sm:py-16 lg:py-24 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center items-center">
          
          <div className="w-full aspect-video rounded-2xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_nHb0_lc2vk?autoplay=1"
              
              title="About Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;