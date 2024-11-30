export default function HeroSection() {
  return (
    <div className="w-[1046px] h-[1028px] py-20 gap-20 absolute top-[104px] left-[197px] flex flex-col items-center justify-center text-white  ">
      {/* row-1 */}

      <div className="w-[701px] h-[496px]">
        {/* main-content */}

        <div className="w-[699px] h-[496px] py-10 gap-10 flex flex-col items-center">
          <h5 className="w-[77px] h-[24px] font-bold text-base leading-6 tracking-[0.1px] text-[#23A6F0]">
            Welcome
          </h5>
          <h1 className="w-[542px] h-[160px] font-bold text-[58px] leading-[80px] tracking-[0.2px] text-center text-white">
            Selling on the internet like a pro
          </h1>
          <h4 className="w-[536px] h-[60px] font-normal text-xl leading-[30px] tracking-[0.2px] text-white text-center">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h4>
          <span className="w-[365px] h-[52px] gap-[10px] flex">
            <button className="w-[193px] h-[52px] rounded-[5px] py-[15px] px-[40px] gap-[10px] bg-[#23A6F0]">
                <p className="w-[113px] h-[22px] font-bold text-sm leading-[22px] tracking-[0.2px] text-center">Get Quote Now</p>
            </button>
            <button className="w-[162px] h-[52px] rounded-[5px] border border-[#23A6F0] py-[15px] px-[40px] gap-[10px]">
                <p className="w-[82px] h-[22px] font-bold text-sm leading-[22px] tracking-[0.2px] text-center text-[#23A6F0]">Learn More</p>
            </button>
          </span>
        </div>
      </div>

      {/* row-2 */}

      <div className="w-[1046px] h-[292px] gap-[30px] flex">
        <div className="w-[328px] h-[292px]">
          {/* card */}
          <div className="w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] flex flex-col bg-white">
            <div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] bg-[#FFDCD1]"></div>
            <h3 className="w-[135px] h-[24px] font-bold text-base leading-[24px] tracking-[0.1px] text-black">training Courses</h3>
            <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
            <p className="w-[222px] h-[60px] font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
          </div>
        </div>
        <div className="w-[328px] h-[292px]">
          {/* card */}
          <div className="w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] flex flex-col bg-white">
            <div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] bg-[#B9EAA8]"></div>
            <h3 className="w-[168px] h-[24px] font-bold text-base leading-[24px] tracking-[0.1px] text-black">2,769 online courses</h3>
            <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
            <p className="w-[222px] h-[60px] font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
          </div>
        </div>
        <div className="w-[328px] h-[292px]">
          {/* card */}
          <div className="w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] flex flex-col bg-[#23A6F0]">
            <div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] bg-[#ffffff]"></div>
            <h3 className="w-[135px] h-[24px] font-bold text-base leading-[24px] tracking-[0.1px] text-[#ffffff]">training Courses</h3>
            <div className="w-[50px] h-[2px] bg-[#ffffff]"></div>
            <p className="w-[222px] h-[60px] font-normal text-sm leading-5 tracking-[0.2px] text-[#ffffff]">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
