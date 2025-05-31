
import fiftyPercent from "/images/fifty-percent.png"
const DiscountBanner = () => {
    return (
        <>


            <section className="md:pt-[100px]  pt-[50px]">

                <div className="custom_container">

                    <div className="bg-lightGreen border-l-[6px] border-yellow  pt-[20px] pb-[20px] ">

                        <div className="flex gap-4 flex-col md:flex-row md:items-center items-center justify-between w-full">
                            <div className="flex md:w-1/2">


                                <div className="flex  items-start flex-col justify-left md:w-1/2 md:pl-[60px]">
                                    <div>
                                        <span className="md:text-[60px] sm:text-[32px] text-[20px]  font-bold font-jost  text-yellow">50% </span>
                                        <span className="md:text-[60px] sm:text-[32px] text-[18px] font-semibold text-white font-jost  uppercase">off</span>
                                    </div>
                                    <div>
                                        <span class="cursor-pointer uppercase flex items-center gap-2 text-white text-left md:text-[18px]  hover:text-black transition-all duration-500">Shop Now <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></span>
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full flex items-center justify-center text-left">
                                    <span className="font-barlow block  md:text-[40px] sm:[28px] text-[24px] leading-[30px] font-semibold text-white md:w-[80%] text-center w-[55%] md:leading-[57px]">Popular and Trending Products</span>
                                </div>

                            </div>
                            <div className="hidden sm:block md:w-1/3  justify-end">
                                <img src={fiftyPercent} alt="" className="" />
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}
export default DiscountBanner