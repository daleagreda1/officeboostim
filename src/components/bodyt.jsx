import desktop from "../assets/bodyt/Desktop.png";


const Bodyt = () => {
  return (
    <div className="bgrealworld py-[-2rem] px-[10.2rem] flex items-center justify-center">
        <div>
        <div className="titletext">
        <img class="w-[95.8rem]" src={desktop} width={1440} height={1090} alt="background"/> 
        </div>  
        <div className="justify flex">
        <p className="bigtext text-center text-white text-5xl font-semibold font-plus-jakarta-sans leading-[3.9rem]">
        Real-world examples of how we have helped companies achieve their marketing objective.</p>
        </div>
        <div class="justify-start flex gap-8 mt-[-60rem] ml-[14rem]">
            <div class="flex justify-start">
                <button className="allworkbtn border-2 border-white bg-black text-white w-[14.75rem] h-12 py-2 px-12 cursor-pointer 
        rounded-full font-bold transition duration-300 hover:bg-white hover:text-black font-manrope">
                    All Work[28]
                </button>
            </div>
            <div class="justify-start">
                <button className="uiuxbtn border-2 border-lime-300 bg-lime-300 text-black w-[14.75rem] h-12 py-2 px-12 cursor-pointer 
        rounded-full font-bold transition duration-300 hover:bg-white hover:text-black hover:border-white font-manrope">
                    UI/UX Design[10]
                </button>
            </div>
            <div class="justify-start">
                <button className="digibtn flex border-2 border-white bg-black text-white w-[16.2rem] h-[3rem] py-2 px-12 cursor-pointer 
        rounded-full font-bold transition duration-300 hover:bg-white hover:text-black hover:border-white font-manrope">
                    Digital Marketing [5]
                </button>
            </div>
            <div class="justify-start">
                <button className="brandingbtn border-2 border-white bg-black text-white w-[14.75rem] h-12 py-2 px-12 cursor-pointer 
        rounded-full font-bold transition duration-300 hover:bg-white hover:text-black font-manrope">
                    Branding[5]
                </button>
            </div>
        </div>
        <div class="flex justify-start">
            <h2 class="flex mt-[37rem] ml-[-28.4rem] mr-[rem] text-lg font-bold font-plus-jakarta-sans">See Details</h2>
            <h2 class="flex mt-[24.5rem] ml-[-2rem] mr-[rem] w-[14rem] text-lg text-black font-semibold font-plus-jakarta-sans">Ai Corporation 2023</h2>
            <h2 class="flex mt-[48rem] ml-[-5.4rem] mr-[2rem] w-[23.1rem] text-2xl text-black font-semibold font-plus-jakarta-sans">Ai Wave - Ai Chatbot Mobile App</h2>
            <h2 class="flex mt-[24.4rem] ml-[30rem]  w-[13.6rem] text-lg text-black font-semibold font-plus-jakarta-sans">Lancer Corporation. 2023</h2>
            <h2 class="flex mt-[48rem] ml-[26.2rem]  w-[25rem] text-2xl text-black font-bold font-plus-jakarta-sans">App Lancer - Freelance Mobile App</h2>
        </div>
        </div>
    </div>
  );
};

export default Bodyt;
