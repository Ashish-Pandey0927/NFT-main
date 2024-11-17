import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
    const signInButtonRef = useRef(null);
    const handImageRef = useRef(null);
  
    // State to track mouse movement
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [animateOnLoad, setAnimateOnLoad] = useState(true); // Track if load animation is active
  
    useEffect(() => {
      // Trigger the animation on page load
      setAnimateOnLoad(true);
    }, []);
  
    const handleMouseEnterLeave = () => {
      if (signInButtonRef.current) {
        signInButtonRef.current.classList.remove("animate-bubble-once");
        void signInButtonRef.current.offsetWidth;
        signInButtonRef.current.classList.add("animate-bubble-once");
      }
    };
  
    const handleMouseMove = (event) => {
      // Get the mouse position relative to the window
      const { clientX: mouseX, clientY: mouseY } = event;
      setMousePosition({ x: mouseX, y: mouseY });
    };
  
    const handleAnimationEnd = () => {
      // Remove the animation class once it completes
      setAnimateOnLoad(false);
    };
  
  return (
    <section
      className="relative h-[120vh] w-screen overflow-hidden"
      onMouseMove={handleMouseMove} // Track mouse movement
    >
      {/* Left image */}
      <div className="absolute top-0 left-0 h-full w-1/2">
        <img
          src="https://assets.website-files.com/62a4abb35d5fdf0ba6da53a8/62a4adcf2b9d42290f791e18_Ellipse%2017%20(5).svg"
          className="w-[35vw] -z-1 absolute top-40 left-[-5vw] blur-lg"
          alt="Left decorative blur"
        />
        <div className="flex gap-28 items-center backdrop-blur-[130px] flex-col pt-[6.61376vw] static h-full bg-transparent">
          <h1 className="w-[41.9312vw] mt-0 mb-0 text-[5.29105vw] leading-[95%] px-20 relative left-[60px] font-[900] top-[45px]">
            Start monetizing your NFTs
          </h1>
          <a
            href="#"
            ref={signInButtonRef}
            className=" relative -left-14 w-[16.6005vw] h-[4.89418vw] mt[-5.32275vw] p-[1.71958vw 6.15079vw] text-center bg-[#1b1b1b] rounded-[3.63757vw] text-[#e2e8f0] text-[1.19048vw] font-[600] flex items-center justify-center transition-all duration-250 hover:bg-blue-600 animate-bubble-once"
            onMouseEnter={handleMouseEnterLeave}
            onMouseLeave={handleMouseEnterLeave}
          >
            Sign in
          </a>
          <div className="flex justify-between  relative top-[-2.8vw] left-16">
            <div className="w-[40%] gap-y-[.595238vw] flex-col justify-center items-start flex">
              <div className="text-[#1b1b1b] text-[1.98413vw] font-[600] leading-[106%]">
                27K
              </div>
              <div className="w-[11vw] h-[100%] text-[#1b1b1b] text-[.925926vw] font-[300] leading-[114%]">
                Active NFT
                <br />
                creators
              </div>
            </div>
            <div className="w-[40%] gap-y-[.595238vw] flex-col justify-center items-start flex">
              <div className="text-[#1b1b1b] text-[1.98413vw] font-[600] leading-[106%]">
                14K
              </div>
              <div className="w-[11vw] h-[100%] text-[#1b1b1b] text-[.925926vw] font-[300] leading-[114%]">
                Active NFT
                <br />
                collectors
              </div>
            </div>
            <div className="w-[40%] gap-y-[.595238vw] flex-col justify-center items-start flex">
              <div className="text-[#1b1b1b] text-[1.98413vw] font-[600] leading-[106%]">
                $5170
              </div>
              <div className="w-[11vw] h-[100%] text-[#1b1b1b] text-[.925926vw] font-[300] leading-[114%]">
                Average nft monetization revenue
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right image */}
      <div className="absolute top-0 right-0 h-full w-1/2">
        <img
          src="https://assets.website-files.com/62a4abb35d5fdf0ba6da53a8/62a4adcf2b9d42290f791e18_Ellipse%2017%20(5).svg"
          className="w-[80vw] -z-1 absolute bottom-0 right-[-20vw] blur-3xl z-[-2] inline-block"
          alt="Right decorative blur"
        />
        {/* Hand image with load animation */}
        <img
          ref={handImageRef}
          src="/hand.png"
          className={`w-[72.09vw] max-w-none object-cover pt-[3.72963vw] pl-[3.41164vw] ${
            animateOnLoad ? "animate-rotate-and-slide" : ""
          }`}
          style={{
            transition: "transform 0.2s ease-out", // Smooth transition for mouse tracking
            transform: `translate(${
              (mousePosition.x - window.innerWidth / 2) * 0.1
            }px, ${(mousePosition.y - window.innerHeight / 2) * 0.1}px)`,
          }}
          onAnimationEnd={handleAnimationEnd} // Remove animation after it completes
        />
    

        {/* Rotating SVG */}
        <img
          src="https://cdn.prod.website-files.com/62a4abb35d5fdf0ba6da53a8/62a4ac0342b2605fcaa56466_Linked%20Path%20Group.svg"
          className="z-[-1] w-[11.88vw] absolute top-10 bottom-auto left-auto right-[16.69vw] rotating-svg"
          alt="Rotating SVG"
        />
      </div>
    </section>
  );
};

export default Hero;
