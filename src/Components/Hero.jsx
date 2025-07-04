import Navbar from "./Navbar"
import bannerLeftTop from "/images/banner-left-top.png"
import bannerImage from "/images/banner-img.png"

const Hero = () => {
    return (
        <>
            <section className="relative bg-gray w-full pt-[100px] pb-0   pl-5 pr-5">
                <div className="hidden md:block">
                    <img src={bannerLeftTop} alt="" className="absolute top-0 left-0" />
                </div>
                <div className="container mx-auto">

                    <div className="flex w-full">


                        <div className="flex w-full md:w-1/2 items-center md:justify-start justify-center">
                            <div className="flex flex-col ">
                                <span className="text-primary  font-jost md:text-left text-center  md:text-[25px] text-[20px] mb-[20px]">Welcome To Our Grocery Store</span>
                                <h1 className="md:text-[70px] text-[32px] md:text-left text-center leading-none font-bold  font-headingFont mb-[30px]">Shop Online For <br />Fresh Grocries</h1>
                                <p className="text-center md:text-left  mb-[30px] ">Duis aute irure dolor in reprehenderit in voluptate<br></br>
                                    velit esse cillum dolorepxu fugiat nulla pariatur. </p>
                                <div className="flex gap-4 md:justify-start justify-center">
                                    <button className="font-jost uppercase md:text-[16px] text-[14px]  bg-primary md:pt-[14px] md:pb-[14px] md:pl-[34px] md:pr-[34px] pt-[11px] pl-[30px] pb-[11px] pr-[30px]  text-white">Shop now</button>
                                 
                                    <button className="font-jost uppercase md:text-[16px] text-[14px]  bg-green md:pt-[14px] md:pb-[14px] md:pl-[34px] md:pr-[34px] pt-[11px] pl-[30px] pb-[11px] pr-[30px]  text-white">Read More</button>

                                </div>
                            </div>

                        </div>
                        <div className="w-1/2 hidden md:block sm:hidden">
                            <img src={bannerImage} alt="" />

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Hero