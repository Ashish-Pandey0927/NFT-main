import React, { useRef } from 'react';

const Navbar = () => {
  const signInButtonRef = useRef(null);

  const handleMouseEnterLeave = () => {
    // Remove and re-add the animation class
    if (signInButtonRef.current) {
      signInButtonRef.current.classList.remove('animate-bubble-once');
      // Trigger reflow to restart animation
      void signInButtonRef.current.offsetWidth;
      signInButtonRef.current.classList.add('animate-bubble-once');
    }
  };

  return (
    <nav className="flex justify-between items-center px-[13.8889vw]">
      <div className="h-[1.5vw] w-[11.5vw]">
        <a href="#">
          <img
            src="https://cdn.prod.website-files.com/62a4abb35d5fdf0ba6da53a8/62a4ac0342b260c227a56467_Logo%20and%20naming%201.svg"
            className="inline-block"
          />
        </a>
      </div>
      <div id="nav-link-wrapper" className="flex gap-4">
        <div>
          <a href="#" className="nav-link hover:text-blue-600">
            How it works
          </a>
        </div>
        <div>
          <a href="#" className="nav-link hover:text-blue-600">
            Why is it cool?
          </a>
        </div>
        <div>
          <a href="#" className="nav-link hover:text-blue-600">
            FAQ
          </a>
        </div>
        <div
          ref={signInButtonRef}
          className="w-[8.59788vw] h-[2.57937vw] text-center bg-[#090909] rounded-[3.63757vw] text-[#e2e8f0] text-[15px] flex items-center justify-center transition-all duration-250 hover:bg-blue-600 animate-bubble-once"
          onMouseEnter={handleMouseEnterLeave}
          onMouseLeave={handleMouseEnterLeave}
        >
          <a href="#" className="text-left">
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
