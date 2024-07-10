import '../index.css';
import Laptop from "../assets/Hero/Laptop.png";
import circle from "../assets/Hero/circle.png";
import rectangle from "../assets/Hero/rectangle.png";
import Vector from "../assets/Hero/Vector.png";
import trilogo from "../assets/Hero/trilogo.png";
import bar from "../assets/Hero/bar.png";
import barline from "../assets/Hero/barline.png";


const Hero = () => {
  return (

    <div className="px-[6rem] py-[12.8rem]">
       <div class="flex w-full">
       <div>
        <p className="paragraph w-[700px] text-black text-7xl font-semibold 
        font-['Plus Jakarta Sans'] leading-[80px] ml-[2rem]">Stay ahead of the 
        curve without our 
        forward-thinking
        </p>
        <div>
        <img class="laptop ml-auto mr-[-28rem] mt-[-12rem]"
        src={Laptop} 
        width={303} 
        height={275} 
        alt="laptop"          
        />
        <img class="circle ml-auto mr-[-27rem] mt-[-20rem]"
        src={circle}
        width={180} 
        height={108} 
        alt="circle"          
        />
        </div>
        <div>
        <div class="absolute flex">
        <h1 className="h1-rectangle ml-auto mt-4 mr-[-93rem] w-200 text-8xl font-bold font-plus-jakarta-sans">230+</h1>
        <div class="absolute">
        <p className="p-rectangle ml-auto mt-[8rem] mr-[-91rem] text-gray-600 w-[12rem] h-60 text-base font-plus-jakarta-sans">some big companies that we work with, and trust us very much</p>
        </div>
        </div>
        <img class="rectangle ml-auto mr-[-47.6rem] mt-[-8.6rem]"
        src={rectangle} 
        width={259} 
        height={275} 
        alt="rectangle"          
        />
        <img class="vector ml-auto mr-[-45.8rem] mt-[-2.8rem]"
        src={Vector} 
        width={200} 
        height={20} 
        alt="vector"        
        />
        </div>   
       </div>
       <div class="flex">
       <p className="paragraph-award mr-auto ml-[-43.6rem] mt-[17rem] w-[32rem] h-12 text-base font-plus-jakarta-sans
        text-neutral-400 font-normal leading-7">An award-winning SEO agency with disciplines in digital marketing, design, 
        and website development. focused on understanding you.</p>
       <div>
       <button className="schedulecall justify between mt-[24rem] mr-auto ml-[-43.6rem] w-[14rem] h-[3.2rem] pt-[0.7rem] pr-[4rem] bg-black text-white py-2 px-8 border-2 
       border-black rounded-full hover:bg-white hover:text-black text">Schedule Call
       <svg className="arrowschedule ml-[8rem] mt-[-1.6rem] w-6 h-8 text-white hover:text-black"data-slot="arrowschedule" stroke-width="1.8" fill="none" stroke="currentColor" 
       viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
       </path></svg>
       </button>
       <button className="btnViewCaseStudy mt-[24.4rem] ml-[4rem] text-black w-40 h-10 text-base underline 
        font-semibold font-plus-jakarta-sans hover:bg-black hover:text-white rounded-full">
        View Case Study
       </button>
       </div>
       </div>
       <div>
       <p className="Trustedtext mt-[32rem] ml-[-44rem] mr-1 text-base text-black w-48 h-5 font-semibold font-plus-jakarta-sans">
       Trusted by the world's biggest brands
       </p>
       <div class=" flex w-full items-center mr-auto ml-[-26rem] mt-[-0.8rem]">
       <img className="trilogo"
        src={trilogo} 
        alt="trilogo"        
        />
        </div>
        <div>
        <div class="flex w-full">
        <img className="bar mt-[-12rem] ml-[9rem] mr-[0rem]" src={bar} width={625} height={216} alt="bar"/>
        </div>
        <div class="flex mt-[-11rem] ml-[11rem]">
        <img className="barline bg-black" src={barline} width={54} height={20} alt="barline"/>
        </div>
        <div className="flex mt-[-.8rem] ml-[15rem]">
        <h1 className="bartex text-white text-base w-60 font-plus-jakarta-sans">Drive More Traffic and Sales</h1>
        <div className="flex mt-[2.6rem] ml-[-19.2rem]">
        <h1 className="bartext2 text-white font-semibold text-4xl w-[20rem] 
        h-16 leading-[2.8rem] font-plus-jakarta-sans">Drive more traffic and product sales</h1>
        </div>
        </div>
        </div>
       </div>
       </div>
    </div>
  );
};

export default Hero;
