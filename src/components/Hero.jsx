import { div } from "framer-motion/client";
import React from "react";
import heroimage from "../assets/image.png";

const Hero = () => {
    return (
        
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-100 px-4 py-8">
            
            <div className="w-full max-w-6xl backdrop-blur-xl bg-white/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 lg:py-30   mb-10 shadow-xl grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">

                {/* Left Content */}
                <div>
                    <h4 className="text-sm sm:text-base text-gray-500 mb-2">Hello, I'm</h4>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Praveen <br /> Saini
                    </h1>

                    <p className="text-sm sm:text-base text-gray-600 mt-4 sm:mt-5 max-w-md">
                        Serial entrepreneur passionate about restarting and rebuilding to unlock potential. Founder of WIZ4U Group and Chief Content Creator at Success Redefining, inspiring growth through impactful content.
                    </p>

                    {/* <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold">
                        Say Hello!
                    </button> */}

                    {/* Stats */}
                    <div className="flex gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">4 Y.</h2>
                            <p className="text-xs sm:text-sm text-gray-500">Experience</p>
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">50+</h2>
                            <p className="text-xs sm:text-sm text-gray-500">Projects</p>
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">3</h2>
                            <p className="text-xs sm:text-sm text-gray-500">Ventures </p>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center mt-6 md:mt-0">
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-lg">
                        <img
                            src={heroimage}
                            alt="profile"
                            className="w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 object-cover rounded-xl sm:rounded-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
