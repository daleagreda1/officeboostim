import '../index.css';
import boostim from "../assets/boostim.png";
import notif from "../assets/Header/notif.png";
import chevrondown from "../assets/Header/chevrondown.svg";

const Header = () => {
  return (
    <header class="header bg-white w-full p-10 flex justify-between items-center absolute">
      <div class="header-left flex items-center px-[5rem] py-0">
          <img class="boostim-logo mt-3.5 mr-2"src={boostim} width={40} height={40} alt="Boostim" />
        <button>  
        <h1 class="title text-2xl font-bold mx-1px mr-[4rem] mt-4 text-blackfont-['Manrope']">
        boostim</h1>
        </button>
        <nav className="nav ml-4 flex space-x-4 mt-5">
          <ul class="flex list-none justify-between items-center ">
           <li class="relative cursor-pointer"><button className="nav-button w-40 py-2 px-4 ml-0 transition duration-300 bg-transparent
         rounded-lg hover:bg-black hover:text-white text-black text-sm font-semibold font-['Plus Jakarta Sans']">Service
         <img class="chevrondown ml-[6rem] mt-[-1.2rem] hover:bg-white" src={chevrondown} width={20} height={20} alt="arrowdown"/></button></li>
           <li class="relative cursor-pointer "><button className="nav-button w-40 py-2 px-4 transition duration-300 bg-transparent
         rounded-lg hover:bg-black hover:text-white text-black text-sm font-semibold font-['Plus Jakarta Sans']">Agency
         <img class=" ml-[6rem] mt-[-1.2rem] hover:bg-white" src={chevrondown} width={20} height={20} alt="arrowdown"/></button></li>
           <li class="relative cursor-pointer"><button className="nav-button w-40 py-2 px-4 transition duration-300 bg-transparent
           rounded-lg hover:bg-black hover:text-white text-black text-sm font-semibold font-['Plus Jakarta Sans']">Case Study
           <img class=" ml-[6.6rem] mt-[-1.2rem] hover:bg-white" src={chevrondown} width={20} height={20} alt="arrowdown"/></button></li>
           <li class="relative cursor-pointer"><button className="nav-button w-40 py-2 px-4 transition duration-300 bg-transparent 
         rounded-lg hover:bg-black hover:text-white text-black text-sm font-semibold font-['Plus Jakarta Sans']">Resources
         <img class=" ml-[6.6rem] mt-[-1.2rem] hover:bg-white" src={chevrondown} width={20} height={20} alt="arrowdown"/></button></li>
           <li class="relative cursor-pointer"><button className="nav-button w-40 py-2 px-4 transition duration-300 bg-transparent
         rounded-lg hover:bg-black hover:text-white text-black text-sm font-semibold font-['Plus Jakarta Sans']">Contact</button></li>
          </ul>
        </nav>
        <div className="header-right flex items-center">
        <button className="get-started border-2 mt-2 ml-[14rem] border-black bg-white text-black w-[11.4rem] h-12 py-2 px-12 cursor-pointer 
        rounded-full font-semibold transition duration-300 hover:bg-black hover:text-white font-manrope">Get started</button>
        <button>
        <img class="notif mr-0 ml-4 mt-2 hover:bg-black" src={notif} width={48} height={50} alt="Notification"/>
        </button>
        </div>
      </div>
    </header>
  );
};


export default Header;
