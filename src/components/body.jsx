import projectman from "../assets/Body/projectman.png";
import wework from "../assets/Body/wework.png";
import weworkcircle from "../assets/Body/weworkcircle.png";



const body = () => {
  return (
    <div className="px-[4.8rem] py-[2rem] ">
      <div>
      <h1 className="hprovide flex ml-[3rem] mt-[-4rem] text-5xl font-semibold w-[42rem] h-24 leading-relaxed font-plus-jakarta-sans ">
      Provide the best service with out of the box ideas</h1>
      <p className="pprovide flex ml-auto mr-[10rem] mt-[-4.8rem] text-gray-600 text-xl w-[42rem] h-32 leading-relaxed font-medium font-plus-jakarta-sans"> 
      we are a passionate team of digital marketing enthusiasts 
      dedicated to helping businesses succeed in the digital world. With years of experience 
      and a deep understanding of the ever-evolving online landscape, we stay at the forefront 
      of industry trends and technologies.</p>
      </div>
      <div className="px-24 py-10">
      <img class="projectman ml-[-3rem] mt-14"
        src={projectman} 
        width={438} 
        height={382} 
        alt="projectman"          
        />
      </div>
      <div className="px-24 py-10">
      <div>
      <img class="wework ml-auto mr-[4rem] mt-[-28.8rem]"
        src={wework} 
        width={820} 
        height={200} 
        alt="wework"          
        />
      <p className="ninet relative mr-auto ml-[-0.2rem] mt-[-23rem] text-white text-7xl w-590 h-32 leading-relaxed font-medium font-plus-jakarta-sans">920 
      <p className="plus relative ml-[7.4rem] mt-[-5.6rem] text-lime-300 text-7xl font-medium font-plus-jakarta-sans">+</p></p>
      <p className="ninetproject mt-[-1rem] text-neutral-400 text-[19px] text- font-medium font-plus-jakarta-sans leading-loose">Project finish with superbly</p>  
      </div>
      <div>
      <img class="weworkcircle ml-auto mr-[3rem] mt-[4.8rem]"
        src={weworkcircle} 
        width={163} 
        height={163} 
        alt="weworkcircle"          
      />
      <p className="howwework ml-[47.4rem] mt-[-16rem] w-[40rem] text-white text-5xl font-semibold font-plus-jakarta-sans leading-[67.20px] tracking-[12.96px]"> HOW WE WORK </p>
      </div>
      </div>
    </div>
  );
};

export default body;
