import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import categoryOne from "/images/corner1.png"
import categoryTwo from "/images/corner2.png"
import categryThree from "/images/corner3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CategorySection = () => {
    return (
        <>


            <section id="category_section " className="md:pt-[100px] md:pb-[100px] pt-[50px] pb-[50px]" >
                <div className="custom_container">
                    <div className="flex flex-wrap gap-[30px] md:justify-center jus justify-center jus w-full ">
                        <div className="bg-PaleRobin md:pt-[68px] md:pb-[68px] md:pl-[32px] md:pr-[32px] sm:w-[47.9%] lg:w-[31.5%] p-[30px] relative w-[100%]">

                            <div className=" md:w-[58%] w-[41%] flex flex-col md:justify-start gap-6">
                                <p className="md:text-[28px] text-[23px] text-white text-left md:text-left font-jost loading-[37px]">Get Every Vegetable You Need</p>
                                <span className="cursor-pointer uppercase flex items-center gap-2 text-white text-left text-[16px] font-semibold text-semibold  hover:text-black transition-all duration-500">Shop Now <FontAwesomeIcon icon={faArrowRight} /></span>
                            </div>
                            <img src={categoryOne} alt="" className="absolute bottom-[-6px] right-[-6px] w-[150px] md:w-[195px]" />
                        </div>
                        <div className="bg-orange md:pt-[68px] md:pb-[68px] md:pl-[32px] md:pr-[32px] sm:w-[47.9%] lg:w-[31.5%] p-[30px] relative w-[100%]">

                            <div className=" md:w-[58%] w-[41%] flex flex-col md:justify-start gap-6">
                                <p className="md:text-[28px] text-[23px] text-white text-left md:text-left font-jost loading-[37px]">We Have Best Beverages Collection</p>
                                <span className="cursor-pointer uppercase flex items-center gap-2 text-white text-left text-[16px] font-semibold text-semibold  hover:text-black transition-all duration-500">Shop Now <FontAwesomeIcon icon={faArrowRight} /></span>
                            </div>
                            <img src={categoryTwo} alt="" className="absolute md:bottom-[-6px] md:right-[6px] right-[5px] bottom-[-6px] w-[150px] md:w-[165px]" />
                        </div>
                        <div className="bg-lightGreen md:pt-[68px] md:pb-[68px] md:pl-[32px] md:pr-[32px] sm:w-[47.9%] lg:w-[31.5%] p-[30px] relative w-[100%]">

                            <div className=" md:w-[58%] w-[41%] flex flex-col md:justify-start gap-6">
                                <p className="md:text-[28px] text-[23px] text-white text-left md:text-left font-jost loading-[37px]">Beauty And Health Products</p>
                                <span className="cursor-pointer uppercase flex items-center gap-2 text-white text-left text-[16px] font-semibold text-semibold  hover:text-black transition-all duration-500">Shop Now <FontAwesomeIcon icon={faArrowRight} /></span>
                            </div>
                            <img src={categryThree} alt="" className="absolute bottom-[-6px] md:right-[6px] right-[8px] w-[120px] md:w-[165px]" />
                        </div>


                    </div>
                </div>



            </section>

        </>
    )
}
export default CategorySection