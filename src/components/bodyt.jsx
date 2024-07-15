import desktop from "../assets/bodyt/Desktop.png";

const Bodyt = () => {
  return (
    <div className="bgrealworld py-[2rem] h-full w-ful px-[11rem] m-2px items-center overflow-hidden ">
      <div className="bodybg px-[-8rem] mr-[rem] items-center">
        <img
          className="imgbodyt "
          src={desktop}
          width={1540}
          height={1000}
          alt="background"
        />
      </div>
      <div class="text mt-[-59rem] align-middle">
        <div
          className="justify ml-[5.8rem] flex text-center items-center w-[1280px] bigtext text-white text-5xl 
         font-semibold font-plus-jakarta-sans leading-[3.9rem]"
        >
          {" "}
          Real-world examples of how we have helped companies achieve their
          marketing objective.
        </div>
        <div class="justify-normal mt-[4rem] ml-[240px] flex gap-8 ">
          <div class="flex justify-start">
            <button
              className="allworkbtn border-2 border-white bg-black text-white w-[14.75rem] h-12 py-2 px-12 cursor-pointer 
        rounded-full font-bold transition duration-300 hover:bg-white hover:text-black font-manrope"
            >
              All Work[28]
            </button>
          </div>
          <div class="justify-start">
            <button
              className="uiuxbtn border-2 border-lime-300 bg-lime-300 text-black w-[14.75rem] h-12 py-2 px-12 cursor-pointer 
        rounded-full font-bold transition duration-300 hover:bg-white hover:text-black hover:border-white font-manrope"
            >
              UI/UX Design[10]
            </button>
          </div>
          <div class="justify-start">
            <button
              className="digibtn flex border-2 border-white bg-black text-white w-[16.2rem] h-[3rem] py-2 px-12 cursor-pointer 
        rounded-full font-bold transition duration-300 hover:bg-white hover:text-black hover:border-white font-manrope"
            >
              Digital Marketing [5]
            </button>
          </div>
          <div class="justify-start">
            <button
              className="brandingbtn border-2 border-white bg-black text-white w-[14.75rem] h-12 py-2 px-12 cursor-pointer 
        rounded-full font-bold transition duration-300 hover:bg-white hover:text-black font-manrope"
            >
              Branding[5]
            </button>
          </div>
          <div className="mt-[15rem] flex">
            <div class="ml-[-66.8rem] mt-[7.6rem] text-left flex">
              <h2 class="text-lg w-[12rem] font-bold text-black font-plus-jakarta-sans">
                See Details
              </h2>
            </div>
            <div class="text-justify ml-[16.2rem] mt-[-5.6rem] flex">
              <h2 class="text-lg w-[12rem] text-white font-semibold font-plus-jakarta-sans">
                Ai Corporation 2023
              </h2>
            </div>
            <div class="text-justify flex ml-[-14.4rem] mt-[19.4rem]">
              <h2 class="w-[23.1rem]  text-2xl text-white font-semibold font-plus-jakarta-sans">
                Ai Wave - Ai Chatbot Mobile App
              </h2>
            </div>
            <div class="text-justify flex ml-[13.5rem] mt-[-5.6rem]">
              <h2 class=" w-[13.6rem] text-lg text-white font-semibold font-plus-jakarta-sans">
                Lancer Corporation. 2023
              </h2>
            </div>
            <div class="text-justify flex ml-[-18rem] mt-[.8rem] items-center overflow-hidden">
              <h2 class="w-[24rem] text-2xl text-white font-semibold font-plus-jakarta-sans overflow-hidden">
                App Lancer - Freelance Mobile App
              </h2>
              <div className="mt-[40rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodyt;
