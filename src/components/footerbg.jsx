const Footerbg = () => {
  return (
    <div className="footer py-[2rem] px-[7.4rem] w-full h-full m-2px items-center">
      <div className="footerpicbg  w-max  flex">
        <div className="ml-[-20rem] mt-[5rem]  inline-flex gap-[200px] justify-between">
          <div className="inline-flex py-1 px-60 justify-start">
            <h1 className="text-8xl w-[80rem] ml-[4rem] mt-[-1rem] flex justify-center text-white">
              Ready to work with us?
            </h1>
          </div>
          <div className="flex justify-between mt-[1rem] ml-[-20rem]">
            <button
              className="getstartedfooter w-[14rem] h-[3.8rem] pt-[0.7rem] pr-[6rem] bg-white text-black py-2 px-10 border-2 
       border-black rounded-full hover:bg-black hover:text-white font-semibold"
            >
              Get Started
              <svg
                className="arrowschedule ml-[8rem] mt-[-1.6rem] w-6 h-8 text-black hover:text-white"
                data-slot="arrowschedule"
                stroke-width="1.8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerbg;
