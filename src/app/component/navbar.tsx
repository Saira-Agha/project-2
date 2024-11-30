export default function Navbar(){
    return(
        <div className=" w-[1322px] h-[91px] m-auto text-white flex items-center justify-around">
            {/* logo start */}
            <div className="w-[187px] h-[58px]">
                <h3 className="w-[152px] h-[52px] font-bold text-2xl leading-8 place-content-center">
                    BrandName
                </h3>
                
            </div>
            {/* links start */}
            <div className="w-[815px] h-[58px] left-[365px] font-bold flex items-center justify-between">
                {/* links st */}
                <ul className="w-[275px] h-6 flex gap-[21px] text-sm ">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                {/* buttons st */}
                <div className="w-[159px] h-[52px] gap-[45px] flex items-center">
                    {/* login btn */}
                    <div className="w-[41px] h-[22px]">
                        <button>
                            Login
                        </button>
                    </div>
                    {/* joinus btn */}
                    <div className="w-[214px] h-[52px]">
                        <button className="w-[110px] h-[52px] rounded-[5px] py-[15px] px-[25px] bg-[#23A6F0]">
                            Join Us
                        </button>
                    </div>
                    {/* toggler */}
                    <div className="w-6 h-[13.71px]"></div>
                </div>
            </div>
        </div>
    )
}