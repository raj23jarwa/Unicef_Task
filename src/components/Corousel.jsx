import React, { useState, useEffect } from 'react';
import corousel1 from '../assets/Images/corousel1.png';
import corousel2 from '../assets/Images/corousel2.png';
import corousel3 from '../assets/Images/corousel3.png';
import corousel4 from '../assets/Images/corousel4.png';
import donor from '../assets/Images/donor.png';

const carouselData = [
  {
    image: corousel1,
    donorMessage: `"Children are vulnerable and therefore they need utmost care and above all protection! 
      Let us eradicate exploitation and do whatever it takes to make the lives of our Children 
      beautiful, just like they are! I am glad I donate to UNICEF and have two additional 
      children besides my biological ones. The money donated means nothing absolutely nothing
      to me, but the well-being of my foster kids means the world to me. I love you, my babies!
      May you always be protected and nurtured! Keep up the good work Unicef and may you continue
      to make a positive difference to our Children! I urge all to give whatever you can for it
      is in GIVING that we RECEIVE!"`,
    sign: `Sumita R Almeida, Head- Human Resources, Monedo Financial Services Pvt Ltd`,
  },
  {
    image: corousel2,
    donorMessage: `"Being a donor to UNICEF has been one of the most fulfilling experiences of my life.
     Knowing that my donations are helping to provide financial support to children in need gives me a 
     sense of purpose and satisfaction that is hard to put into words. Through UNICEF's child financial
      support program, my donations are making a real difference in the lives of children, helping to
       provide them with access to education, healthcare, clean water, and other basic necessities that
        are essential for their growth and development."`,
    sign: `Kasiviswanathan Rajasekaran Mangudi`,
  },
  {
    image: corousel3,
    donorMessage: `"Being a donor is a rewarding and fulfilling experience for me. Whether its time,
     money, or resources, the act of giving creates a sense of purpose and satisfaction. 
     Knowing that I am making a small but positive impact on someone else's life is a powerful 
     motivation and it gives me a feeling of personal fulfilment and happiness.
     Thanks to UNICEF India for letting me be a part of it"`,
    sign: `Mridula Research Scholar|IIT Madras`,
  },
  {
    image: corousel4,
    donorMessage: `"I am glad that I got an opportunity to contribute to UNICEF in whatever way I can.
     Future of our Nation is in the hands of today's children and it's our responsibility to make sure
      that our children learn grow and sustain whom will empower our nation. I am sure that one day these
       children will make our nation proud. I humbly request everyone of you to do whatever contribution
        that you can so that our country can nurture future heroes. Jaihind"`,
    sign: `Vaisakh S`,
  },
];

const Corousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    if (currentIndex === carouselData.length) {
      setIsTransitioning(false); // Disable transition temporarily
      setCurrentIndex(0);
      setTimeout(() => {
        setIsTransitioning(true); // Re-enable transition
        setCurrentIndex(1);
      }, 50);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Adjust interval as needed
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setCurrentIndex(currentIndex + 1);
      } else if (event.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative flex items-center justify-between p-5 ">
      <button
        className="bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      <div className="flex w-full flex-col md:flex-row items-center justify-between overflow-hidden">
        <div
          className={`flex transition-transform duration-1000 ease-in-out transform ${!isTransitioning ? 'transition-none' : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {[...carouselData, carouselData[0]].map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full flex flex-col md:flex-row  items-center justify-center">
              <img src={item.image} alt={`carousel-${index}`} className="w-[90%] md:w-1/2 h-auto object-cover" />
              <div className="w-full md:w-[40%] pl-5 flex items-center flex-col">
                <img src={donor} alt="donor" className="w-full md:w-3/4 mx-auto" />
                <span className="text-sm md:text-lg mt-4 block w-3/4 md:w-full">
                  {item.donorMessage}
                </span>
                <em className='text-sm md:text-lg mt-4 block w-3/4 md:w-full font-medium'>
                  {item.sign}
                </em>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-6 rounded-full ${
              currentIndex === index || (currentIndex === carouselData.length && index === 0)
                ? 'bg-[#1cabe2]'
                : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Corousel;
