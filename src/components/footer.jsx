import boostim from "../assets/Footer/boostim.png";
import facebooklogo from "../assets/Footer/facebooklogo.svg";
import twitter from "../assets/Footer/Twitter.svg";
import linkeddin from "../assets/Footer/linkedinlogo.svg";
import insta from "../assets/Footer/instagramlogo.svg";
import phone from "../assets/Footer/phone.svg";
import email from "../assets/Footer/email.svg";
import location from "../assets/Footer/location.svg";

const Footer = () => {
  return (
    <div className="footer w-full h-full py-[5rem] justify-start items-start gap-[180px] inline-flex">
      <div className="flex-col justify-center items-center gap-[30px] inline-flex">
        <div className="justify-start items-center inline-flex">
          <div className=" relative">
            <div class="footerlogo flex items-center">
              <img
                class="footerlogo ml-[-10rem]"
                src={boostim}
                width={60}
                height={60}
                alt="Boostim"
              />
              <button>
                <h1 class="title text-4xl font-semibold mx-1px ml-[.6rem] mr-[11rem] text-blackfont-manrope">
                  boostim
                </h1>
              </button>
            </div>
          </div>
        </div>
        <h1 className="ml-[10rem] mt-[2rem] w-[678px] text-neutral-400 text-lg font-normal font-roboto leading-normal">
          We offers a comprehensive suite of digital marketing services that
          cover all aspects of our online presence. From SEO and social media
          marketing to content creation and PPC advertising, they have the
          expertise and resources to handle our diverse marketing needs.
        </h1>
        <div className="justify-start ml-[-22rem] mt-[1rem] items-start gap-3 inline-flex cursor-pointer">
          <div className="w-[38px] h-[38px] relative ">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-[60px]" />
            <img
              src={facebooklogo}
              className="flex w-[7px] h-3.5 left-[13px] top-[10px] absolute"
            />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-[60px]" />
            <img
              src={twitter}
              className="w-[18px] h-3.5 left-[8px] top-[10px] absolute"
            />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-[60px]" />
            <img
              src={linkeddin}
              className="w-4 h-[15px] left-[9px] top-[9px] absolute"
            />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-[60px]" />
            <img
              src={insta}
              className="w-4 h-[18px] left-[9px] top-[8px] absolute"
            />
          </div>
        </div>
      </div>
      <div className="justify-start items-start gap-[240px] flex">
        <div className="relative">
          <h1 className="left-0 top-0 absolute text-gray-800 text-lg font-semibold font-roboto">
            Navigation
          </h1>
          <div className="left-0 top-[61px] absolute text-neutral-400 text-sm font-normal font-roboto">
            Service
            <h2 class="mt-6" />
            Agency
            <h2 class="mt-6 w-20" />
            Case Study
            <h2 class="mt-6" />
            Resource
            <h2 class="mt-6" />
            Contact
          </div>
        </div>
        <div className="relative">
          <h1 className="left-0 top-0 absolute text-gray-800 text-lg font-semibold font-roboto">
            License
          </h1>
          <h1 className="left-0 top-[61px] absolute text-neutral-400 text-sm font-normal font-roboto">
            Privacy Policy
            <h3 class="mt-6" />
            Copyright
            <h3 class="mt-6 w-24" />
            Email Address
          </h1>
        </div>
        <div className="w-60 h-[191px] relative">
          <h1 className="left-0 top-0 absolute text-gray-800 text-lg font-semibold font-roboto">
            Contact
          </h1>
          <h1 className="left-[32px] top-[64px] absolute text-neutral-400 text-sm font-normal font-roboto">
            (406) 555-0120
          </h1>
          <h1 className="left-[32px] top-[105px] absolute text-neutral-400 text-sm font-normal font-roboto">
            Hey@boostim.com
          </h1>
          <h1 className="w-38 left-[32px] top-[145px] absolute text-neutral-400 text-sm font-normal font-roboto leading-normal">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </h1>
          <div className="w-6 h-6 left-[24px] top-[61px] absolute origin-top-left rotate-180 justify-center items-center inline-flex">
            <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
          </div>
          <img src={phone} className="w-6 h-6 left-0 top-[62px] absolute" />
          <img
            src={email}
            className="w-10 h-6 px-[5px] ml-[-8px] mt-[-36px] pb-0.5 left-0 top-[139px] absolute justify-center items-center inline-flex"
          />
          <img
            src={location}
            className="w-3.5 h-[19px] ml-[6px] mt-[9rem] relative flex-col justify-start items-start flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
