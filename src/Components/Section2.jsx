import React, { useState } from 'react';

const Section2 = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [animate, setAnimate] = useState(false);

  const images = [
    "https://assets.website-files.com/62a4abb35d5fdf0ba6da53a8/62a4ac0342b2608a8ba56476_Frame%2079%20(2).webp",
    "https://assets.website-files.com/62a4abb35d5fdf0ba6da53a8/62a4ac0342b260559aa5647a_Frame%2081%20(2).webp",
    "https://assets.website-files.com/62a4abb35d5fdf0ba6da53a8/62a4ac0342b2602582a56472_Frame%2080%20(1).webp",
  ];

  const titles = [
    "Upload your token",
    "Verify your identity",
    "Complete the process"
  ];

  const handleMouseEnter = (step) => {
    if (step !== activeStep) {
      setActiveStep(step);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500); // Remove animation class after it finishes
    }
  };

  return (
    <section
      className="relative h-[200vh] w-screen overflow-hidden bg-gradient-image flex flex-col justify-start rounded-t-[6.28307vw] backdrop-blur-[7px] z-0 pt-[10.582vw] mt-[-7.30688vw] pb-[10.582vw] items-center"
      id="section2"
    >
      <h2 className="w-[39.6825vw] text-center mt-0 mb-0 text-[3.63757vw] leading-[99%] font-extrabold">How it Works?</h2>
      <div className="flex flex-row gap-y-[3vw] justify-start items-start mt-[6.30688vw]">
        <div className="flex flex-row-reverse justify-center items-center gap-y[3vw] gap-x-[3vw]">
          <div className="flex flex-col pt-[1.32275vw]">
            {['Step 1', 'Step 2', 'Step 3'].map((step, index) => (
              <a
                key={index}
                href="#"
                className="text-left inline-block relative py-[9px] px-[30px] cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index + 1)}
              >
                <div
                  className={`w-[18.5185vw] cursor-pointer mb-[3.30688vw] ${
                    activeStep === index + 1 ? 'text-[#1b1b1b]' : 'text-[#939393] hover:text-[#1b1b1b]'
                  }`}
                >
                  <div className='text-[1.19048vw] font-[700] leading-[138%]'>{step}</div>
                  <h3 className='mt-[.925926vw] mb-0 text-[2.31481vw] leading-[108%]'>{titles[index]}</h3>
                </div>
              </a>
            ))}
          </div>

          {/* Image display with conditional bubble animation class */}
          <div className="block relative">
            <img
              src={images[activeStep - 1]}
              className={`w-[31.4153vw] block static ${animate ? 'animate-bubble-once' : ''}`}
            />
          </div>
        </div>
      </div>
      <div className='flex gap-x-[7.60582vw] mt-[6.56614vw] '>
        {/* Additional info cards */}
        {[ 
          { title: "No commissions", text: "You can import any NFT from your crypto wallet and monetize it for free." },
          { title: "Keep it unique", text: "Manage the price and quantity yourself to preserve uniqueness." },
          { title: "No middleman", text: "Every fan will be able to get a physical original of NFT directly from artists." }
        ].map((item, index) => (
          <div key={index} className='flex items-start justify-between flex-col gap-y-[1.65344vw]'>
            <img src="https://cdn.prod.website-files.com/62a4abb35d5fdf0ba6da53a8/62a4ac0342b26014d3a5647e_Vector%204.svg" className='w-[1.19048vw] ml-[.661376vw] block' />
            <div className='w-[20.5688vw] text-[#252525] text-[1.19048vw] font-[300] leading-[147%]'>
              <strong>{item.title}</strong>
              . {item.text}
            </div>
          </div>
        ))}
      </div>

      {/* Scrolling text section */}
      <div className='w-[78vw] h-[5.09259vw] overflow-hidden border border-[rgba(0,0,0,.15)] rounded-[6.28307vw] mt-[4.96032vw] flex'>
        <div className='marquee flex items-center'>
          <div className='flex gap-x-[0.661376vw] animate-marquee'>
            {Array(9).fill(
              <div className='font-[100] text-[1.5873vw] whitespace-nowrap'>Don’t just hold - earn •</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
