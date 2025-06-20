import { faArrowRight, faStar, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bannerLeftTop from "/images/banner-left-top.png"
import bannerRight from "/images/about-us-banner-img.png"
import AboutUsLowestSection from "../Components/AboutUsLowestSection"
import vision from "/images/vision.png"
import goal from "/images/goal.png"
import FeatureSection from "../Components/FeatureSection"
import quality from "/images/quality.png"
import basket from "/images/basket.png"
import delivery from "/images/delivery.png"
import onlineorder from "/images/online-order.png"
import service from "/images/24service.png"
import chooseUsImage from '/images/choose-us-image.png'

const About = () => {
    return (

        <>
            <section className="relative pt-[120px] pb-0 bg-blue h-[440px] md:h-[540px] ">
                <div className="hidden lg:block absolute left-0 top-0">

                    <img src={bannerLeftTop} alt="" />
                </div>
                <div className="custom_container">
                    <div className=" bg-white pt-[70px] pb-[70px] md:pt-[70px]  md:pb-[70px] pl-[30px] pr-[30px] md:w-[50%] w-[100%] mx-auto  b-top border-t-2 border-lightGreen">
                        <div className="flex items-center justify-center md:justify-center gap-6  mb-6">

                            <span className="md:text-[22px] text-[18px] font-semibold text-lightGreen font-jost">Home</span>
                            <span className="md:text-[22px] text-[18px] font-semibold text-lightGreen font-jost "><FontAwesomeIcon icon={faArrowRight} /></span>
                            <span className="md:text-[22px] text-[18px] font-semibold text-lightGreen font-jost ">About</span>
                        </div>
                        <h1 className=" md:text-[60px] text-[32px] font-jost">About Us</h1>
                    </div>

                </div>
                <div className="absolute right-0 bottom-0 hidden lg:block">
                    <img src={bannerRight} alt="" className="xl:w-[100%] lg:w-[397px] md:w-[445px]" />

                </div>
            </section>

            <AboutUsLowestSection />


            <section className="bg-blue md:pt-[100px] md:pb-[100px] pt-[40px] pb-[40px]">
                <div className="custom_container">




                    <div className="flex flex-col md:flex-row gap-10">
                        <div class="flex flex-col justify-start text-left bg-white b-top border-t-[2px] border-lightGreen pt-[60px] pb-[60px] pl-[48px] pr-[48px]">
                            <figure className=" min-h-[110px] flex items-center ">

                                <img src={vision} alt="" />
                            </figure>
                            <h3 className="font-jost">Our Vision </h3>
                            <p class="md:mb-[24px]  text-center lg:text-left text-darkGray font-barlow">
                                Neque porro quisquam est aui dolorem iesum ruia sit amet, consectetur, adipisci velit, sed quia non eius modi tempora incidunt ut labore et dolore ma volutatem exercitationem ullam.
                            </p>
                            <div className="flex gap-4 items-center">

                                <button className="font-jost uppercase md:text-[16px] text-[14px]  bg-primary md:pt-[14px] md:pb-[14px] md:pl-[34px] md:pr-[34px] pt-[11px] pl-[30px] pb-[11px] pr-[30px]  text-white">Shop now</button>

                            </div>
                        </div>
                        <div class="flex flex-col justify-start text-left bg-white b-top border-t-[2px] border-lightGreen pt-[60px] pb-[60px] pl-[48px] pr-[48px]">
                            <div>
                                <figure className="min-h-[110px] flex items-center ">

                                    <img src={goal} alt="" className="" />
                                </figure>
                                <h3 className="font-jost">Our Goal</h3>
                            </div>
                            <p class="md:mb-[24px]  text-center lg:text-left  text-darkGray font-barlow ">Neque porro quisquam est aui dolorem iesum ruia sit amet, consectetur, adipisci velit, sed quia non eius modi tempora incidunt ut labore et dolore ma volutatem exercitationem ullam.
                            </p>
                            <div className="flex gap-4 items-center">

                                <button className="font-jost uppercase md:text-[16px] text-[14px]  bg-primary md:pt-[14px] md:pb-[14px] md:pl-[34px] md:pr-[34px] pt-[11px] pl-[30px] pb-[11px] pr-[30px]  text-white">Shop now</button>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className="pt-[100px] pb-[100px]">

                <div className="custom_container">
                    <div className="flex flex-cols flex-wrap gap-2">
                        <div className="flex flex-col w-full sm:w-[49%] lg:w-[25%] gap-20 pt-[25px] pb-[25px] pl-[25px] pr-[25px] lg:pl-[19px] lg:pr-[19px]">
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <img src={quality} alt="" />
                                <h4 className="text-[26px] font-bold">Quality Products</h4>
                                <p class="mb-0 lg:text-[20px] text-[16px] font-barlow">Aui dolorem iesum ruia dolor
                                    sit amet, consectetur, adipisci
                                    eius modi incidunt</p>
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <img src={basket} alt="" />
                                <h4 className="text-[26px] font-bold">Online Order</h4>
                                <p class="mb-0 text-[16px] lg:text-[20px] font-barlow">Aui dolorem iesum ruia dolor
                                    sit amet, consectetur, adipisci
                                    eius modi incidunt</p>
                            </div>
                        </div>
                        <div className="hidden lg:block flex-col gap-10 lg:w-[48%] items-center justify-center">

                            <div>
                                <img src={chooseUsImage} alt="" />
                            </div>
                            <button class="mt-[32px] font-barlow bg-lightGreen pt-[14px] pb-[14px] pl-[34px] pr-[34px] text-white text-[16px] uppercase w-[175px]">Shop Now</button>

                        </div>
                        <div className="flex justify-center flex-col sm:w-[49%] lg:w-[25%] gap-20 pt-[25px] pb-[25px] pl-[25px] pr-[25px] lg:pl-[19px] lg:pr-[19px]">
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <img src={delivery} alt="" />
                                <h4 className="text-[26px] font-bold">Fast Delivery</h4>
                                <p class="mb-0 lg:text-[20px]  text-[16px] font-barlow">Aui dolorem iesum ruia dolor
                                    sit amet, consectetur, adipisci
                                    eius modi incidunt</p>
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <img src={service} alt="" />
                                <h4 className="text-[24px] font-bold">24/7 Service</h4>
                                <p class="mb-0 text-[16px] lg:text-[20px] font-barlow">Aui dolorem iesum ruia dolor
                                    sit amet, consectetur, adipisci
                                    eius modi incidunt</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


        </>
    )
}

export default About


