import man from "../assets/Bodythree/man.png";


const Bodythree = () => {
  return (
    <div class=" py-[72rem] px-[10.2rem] flex justify-center">
      <div class="ml-[4rem] w-[1280px] text-black text-4xl font-semibold font-['Plus Jakarta Sans'] leading-[57.60px]">
        <p>They thoroughly analyze our industry and target audience, allowing them to develop customized 
        campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge 
        techniques have helped us stay ahead of the competition.</p>
      </div>
        <div class="ml-[-80rem] mt-[20rem] w-[277px] h-[70px] justify-start items-center gap-6 inline-flex">
            <img src={man} width={70} height={70} alt="man"/>
            <div className="flex-col justify-start items-start gap-[19px] inline-flex">
            <h1 class="text-black text-xl w-40 font-bold font-plus-jakarta-sans leading-9">
            Michael Kaizer
            </h1>
            <h2 class="text-neutral-400 w-60 text-base font-medium font-['Plus Jakarta Sans'] leading-7">
            CEO of Basecamp Corp
            </h2>
            </div>
            <div class="w-[299px] h-14 justify-center items-center gap-[38px] inline-flex">
             <div>
                <button class=" w-[88px] h-14 px-8 py-4 origin-top-left rotate-180 rounded-[70px] border border-black  hover:bg-black justify-center items-center gap-[42px] inline-flex">
                <svg className="arrowschedule inline-flex w-6 h-8 text-black hover:text-white"data-slot="arrowschedule" stroke-width="1.8" fill="none" stroke="currentColor" 
       viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
       </path></svg>
                </button>
             </div>
             <div>
             <div><span class="text-black text-base font-semibold font-plus-jakarta-sans underline leading-7">01</span>
             <span class="text-black/opacity-40 text-base font-semibold font-plus-jakarta-sans leading-7">/05</span></div>
             </div>
             <div>
                <button class=" w-[88px] h-14 px-8 py-4 origin-top-left rounded-[70px] border border-black  hover:bg-black justify-center items-center gap-[42px] inline-flex">
                <svg className="arrowschedule inline-flex w-6 h-8 text-black hover:text-white"data-slot="arrowschedule" stroke-width="1.8" fill="none" stroke="currentColor" 
       viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
       </path></svg>
                </button>
             </div>
            </div>
        </div>
    </div>
  );
};

export default Bodythree;
