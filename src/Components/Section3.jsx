import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  useEffect(() => {
    const texts = gsap.utils.toArray('#frame .text-item');

    // Set up the horizontal scroll effect for the text items
    gsap.to(texts, {
      xPercent: -100 * (texts.length - 1), // Move all text items to the left
      ease: 'none',
      scrollTrigger: {
        trigger: '#frame',
        start: 'top top', // Pin when the top of the frame reaches the top of the viewport
        end: () => `+=${texts.length * 100}vw`, // Match the width of all text items
        scrub: 10, // Enable smooth scrolling
        pin: true, // Pin the frame during the scroll
        anticipatePin: 1, // Smooth out the pinning
        // markers: true, // Uncomment for debugging
      },
    });

    ScrollTrigger.refresh(); // Force refresh to ensure proper calculations
  }, []);

  return (
    <section className='h-[200vh] bg-[#5b58e2] rounded-[5.94vw]'>
      <div
        className="w-full h-[100vh] sticky rounded-[5.94vw] bg-no-repeat bg-contain bg-[50%] overflow-hidden top-0"
        style={{
          backgroundImage: 'url(https://assets.website-files.com/62a4abb35d5fdf0ba6da53a8/62a4adaca434500791129392_Vector%201.svg)',
        }}
        id="frame"
      >
        <div className='flex h-full' id="frame-content">
          {/* Each text-item div represents a horizontal scrolling text section */}
          <div className='text-item w-[100vw] h-[100vh] flex flex-none justify-center items-center'>
            <div className='w-[46vw] text-[#fff] text-center text-[4vw] font-[700] leading-[121%]'>
              Track your progress in real time
            </div>
          </div>
          <div className='text-item w-[100vw] h-[100vh] flex flex-none justify-center items-center'>
            <div className='w-[46vw] text-[#fff] text-center text-[4vw] font-[700] leading-[121%]'>
              Get insights with advanced analytics
            </div>
          </div>
          <div className='text-item w-[100vw] h-[100vh] flex flex-none justify-center items-center'>
            <div className='w-[46vw] text-[#fff] text-center text-[4vw] font-[700] leading-[121%]'>
              Transform your data into action
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
