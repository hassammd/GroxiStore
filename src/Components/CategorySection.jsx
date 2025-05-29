import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import categoryOne from "/images/corner1.png"
import categoryTwo from "/images/corner2.png"
import categryThree from "/images/corner3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CategorySection = () => {
    return (
        <>


            <section id="category_section " className="md:pt-[100px] md:pb-[100px] pt-[50px] pb-[50px]" >
                <div className="container m-auto">
                    <div className="flex flex-wrap gap-[30px] md:justify-center jus justify-center jus ">
                        <div className="bg-PaleRobin pt-[68px] pb-[68px] pl-[32px] pr-[32px] relative w-[350px]">

                            <div className=" md:w-[45%] flex flex-col md:justify-start gap-6">
                                <p className="text-[28px] text-white text-left md:text-left font-jost loading-[37px]">Get Every Vegetable You Need</p>
                                <span className="cursor-pointer uppercase flex items-center gap-2 text-white text-left text-[16px] font-semibold text-semibold  hover:text-black transition-all duration-500">Shop Now <FontAwesomeIcon icon={faArrowRight} /></span>
                            </div>
                            <img src={categoryOne} alt="" className="absolute bottom-[-6px] right-[-6px] w-[150px] md:w-[195px]" />
                        </div>
                        <div className="bg-orange pt-[68px] pb-[68px] pl-[32px] pr-[32px] relative w-[350px]">

                            <div className="w-[86%] flex flex-col md:justify-start gap-6">
                                <p className="text-[28px] text-white text-left md:text-left font-jost loading-[37px]">We Have Best Beverages Collection</p>
                                <span className="cursor-pointer uppercase flex items-center gap-2 text-white text-left text-[16px] font-semibold text-semibold  hover:text-black transition-all duration-500">Shop Now <FontAwesomeIcon icon={faArrowRight} /></span>
                            </div>
                            <img src={categoryTwo} alt="" className="absolute bottom-[4px] right-[23px]  w-[150px] md:w-[145px]" />
                        </div>
                        <div className="bg-lightGreen pt-[68px] pb-[68px] pl-[32px] pr-[32px] relative w-[350px]">

                            <div className="w-[47%] flex flex-col md:justify-start gap-6">
                                <p className="text-[28px] text-white text-left md:text-left font-jost loading-[37px]">Beauty And Health Products</p>
                                <span className="cursor-pointer flex items-center gap-2 uppercase text-white text-left text-[16px]  font-semibold text-semibold hover:text-black transition-sm transition-all duration-500">Shop Now <FontAwesomeIcon icon={faArrowRight} /></span>
                            </div>
                            <img src={categryThree} alt="" className="absolute bottom-[4px] right-[23px]  w-[150px] md:w-[145px] md:h-[248px]" />
                        </div>
                    </div>
                </div>



            </section>

        </>
    )
}
export default CategorySection