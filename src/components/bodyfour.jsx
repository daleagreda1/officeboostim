const Bodyfour = () => {
  return (
    <div className="bodyfour w-full mt-[-1rem] h-full p-4 bg-zinc-100 flex-col justify-start items-start gap-2.5 inline-flex border-[-40px]">
      <div className="self-stretch px-20 py-[66px] bg-white rounded-[28px] justify-start items-start gap-[90px] inline-flex">
        <div className="flex-col justify-center items-start gap-12 inline-flex">
          <h1 className="self-stretch text-black text-5xl font-semibold font-plus-jakarta-sans leading-[62.40px]">
            Digital Marketing FAQs
          </h1>
          <h1 className="w-[531px] text-neutral-400 text-base font-semibold font-plus-jakarta-sans leading-7">
            As a leading digital marketing agency, we are dedicated to providing
            comprehensive educational resources and answering frequently asked
            questions to help our clients.
          </h1>
          <div className="justify-start items-center gap-12 inline-flex">
            <div className="justify-start items-center gap-3 flex">
              <div className="text-black text-base font-semibold font-manrope leading-snug">
                <button className="hover:bg-black hover:text-white w-[10rem] h-14 px-4 py-[18px] rounded-[50px] border border-black justify-center items-end gap-8 flex">
                  More Questions
                </button>
              </div>
            </div>
            <div className="text-black text-base font-semibold font-plus-jakarta-sans leading-7">
              <button className="underline w-[8rem] h-[2rem] rounded-2xl hover:bg-black hover:text-white">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[282px] px-6 py-[26px] bg-white border-t border-b border-black flex-col justify-start items-start gap-12 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <h1 className="w-[448px] text-black text-2xl font-semibold font-plus-jakarta-sans leading-9">
                Why is digital marketing important for my business?
              </h1>
              <h2 className="w-6 h-6 relative mt-[-3rem] text-6xl cursor-pointer">
                -
              </h2>
            </div>
            <h1 className="self-stretch text-neutral-400 text-base font-semibold font-plus-jakarta-sans leading-7">
              Digital marketing allows businesses to reach and engage with a
              wider audience, generate leads, drive website traffic, and
              increase brand visibility. It provides measurable results, allows
              for targeted marketing efforts, and enables businesses to adapt
              and optimize their strategies based on data and insights.
            </h1>
          </div>
          <div className="self-stretch px-6 py-[26px] bg-white border-b border-black justify-between items-center inline-flex">
            <h1 className="w-[448px] text-black text-2xl font-semibold font-plus-jakarta-sans leading-9">
              How can digital marketing help improve my website's visibility?
            </h1>
            <h2 className="w-6 h-6 relative mt-[-2rem] text-5xl cursor-pointer">
              +
            </h2>
          </div>
          <div className="self-stretch px-6 py-[26px] bg-white border-b border-black justify-between items-center inline-flex">
            <h1 className="w-[448px] text-black text-2xl font-semibold font-plus-jakarta-sans leading-9">
              How long does it take to see results from digital marketing
              efforts?
            </h1>
            <h2 className="w-6 h-6 relative mt-[-2rem] text-5xl cursor-pointer">
              +
            </h2>
          </div>
          <div className="self-stretch px-6 py-[26px] bg-white border-b border-black justify-between items-center inline-flex">
            <h1 className="w-[448px] text-black text-2xl font-semibold font-plus-jakarta-sans leading-9">
              How do you measure the success of digital marketing campaigns?
            </h1>
            <h2 className="w-6 h-6 relative mt-[-2rem] text-5xl cursor-pointer">
              +
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodyfour;
