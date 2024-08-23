import React, { useState } from "react";

import acttext from "../assets/Images/acttext.png";
import act from "../assets/Images/act.png";
import hero from "../assets/Images/hero.png";
import experience from "../assets/Images/experience.png";
import expimg from "../assets/Images/expimg.png";
import world from "../assets/Images/world.png";
import worldtext from "../assets/Images/worldtext.png";
import community from "../assets/Images/community.png";
import promising from "../assets/Images/promising.png";
import first from "../assets/Images/1.png";
import second from "../assets/Images/2.png";
import third from "../assets/Images/3.png";
import fourth from "../assets/Images/4.png";
import donatebtn from "../assets/Images/donatebtn.png";
import sample from "../assets/Videos/sample.mp4";
import { Link as ScrollLink, Element } from "react-scroll";
import DonationForm from "./DonationForm";
const Hero = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);


  const handleVideoOpen = () => setIsVideoOpen(true);
  const handleVideoClose = () => setIsVideoOpen(false);

  return (
    <>
      <section className="bg-slate-50">
        {/* Hero Section */}
        <Element name="donationForm">
        <DonationForm />
        </Element>
        {/* Action Section */}
        <div className="flex flex-col md:flex-row w-full pt-10">
          <div className="flex w-full md:w-1/2 flex-col justify-center items-center gap-2 text-center md:text-left">
            <img
              src={acttext}
              alt="Action Text"
              className="w-[80%] mx-auto md:mx-0 md:w-[70%]"
            />
            <span className="text-sm md:text-lg w-5/6 md:w-2/3 font-medium">
              When we give and share, we make our lives more fulfilling. When we
              help others for a better life, we feel the inner joy that stays
              with us lifelong. We invite you to join our family of donors and
              experience the joy of giving by helping vulnerable children
              overcome the challenges in their lives.
            </span>
            <a href="#" className="mt-4 md:mt-0">
              <img
                src={act}
                alt="Act Button"
                className="w-80 md:w-[70%] mx-auto md:mx-0 mt-4 md:mt-0"
              />
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-end items-center mt-10 md:mt-0">
            <img src={hero} alt="Hero Image" className="w-[90%]" />
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex flex-col md:flex-row w-full gap-10 md:gap-32 pt-10">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={experience} alt="Experience" className="w-[80%]" />
          </div>
          <div className="w-full md:w-1/2 flex justify-end items-center">
            <img
              src={expimg}
              alt="Experience Image"
              className="w-[90%]  cursor-pointer"
              onClick={handleVideoOpen}
            />
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
            <div className="relative w-full md:w-3/4">
              <video controls className="w-full h-auto">
                <source src={sample} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={handleVideoClose}
                className="absolute top-2 right-2 text-white text-2xl font-bold cursor-pointer"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* World Section */}
        <div className="flex flex-col md:flex-row w-full p-5 gap-10 pt-10 overflow-hidden">
          <div className="flex justify-center items-center gap-2 w-full md:w-[90%]">
            <img src={world} alt="World" className="w-full" />
          </div>
          <div className="flex justify-center md:justify-start flex-col w-full md:w-[70%]">
            <img
              src={worldtext}
              alt="World Text"
              className="w-2/3 mx-auto md:mx-0"
            />
            <div className="flex gap-4 flex-col mt-4 md:mt-0 font-medium">
              <span className="text-sm md:text-lg w-5/6 md:w-2/3 mx-auto md:mx-0 relative left-9">
                UNICEF has been providing children, and their families,
                essential and urgent support towards more fulfilling lives. Our
                community of supporters, like yourself, has been an integral
                part of this joyful journey of giving children the best start in
                life.
              </span>
              <span className="text-sm md:text-lg w-5/6 md:w-3/4 mx-auto md:mx-0 relative left-9">
                For 75 years, we have been working relentlessly to safeguard
                their rights and growth. We work closely with the Government of
                India and our partners to improve the lives of the most
                vulnerable children with long-lasting interventions.
              </span>
              <a href="#" className="mt-4 md:mt-0">
                <img
                  src={community}
                  alt="Join Community"
                  className="w-80 mx-auto md:mx-0 mt-4 md:mt-0"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Promising Section */}
        <div className="flex flex-col gap-4 justify-center items-center mt-10 md:mt-0">
          <img src={promising} alt="Promising" className="w-[90%] md:w-[50%]" />
          <span className="text-center w-5/6 md:w-[45%] text-sm md:text-lg font-medium">
            All our communication, including financial and programmatic updates,
            is transparent and genuine. We strive to make you feel the impact
            your contributions have made, along with the joy and satisfaction of
            giving.
          </span>
        </div>

        {/* Image section */}
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-4 justify-items-center mt-10">
          {[first, second, third, fourth].map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Supporter ${index + 1}`}
                className="md:w-full w-96 max-w-full h-auto" 
              />
            </div>
          ))}
        </div>

        {/* Donation Button */}
        <div className="fixed bottom-[-2px] md:right-24 z-10 md:w-72">
        <ScrollLink
          to="donationForm"
          smooth={true}
          duration={500} // Duration of the scroll in ms
        >
            <img
              src={donatebtn}
              alt="donate button"
              className="md:w-full w-1/2 relative md:left-24 left-60"
            />
          </ScrollLink>
        </div>
      </section>
    </>
  );
};

export default Hero;
