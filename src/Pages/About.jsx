import { faArrowRight, faStar, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bannerLeftTop from "/images/banner-left-top.png"
import bannerRight from "/images/about-us-banner-img.png"
import AboutUsLowestSection from "../Components/AboutUsLowestSection"
import vision from "/images/vision.png"
import goal from "/images/goal.png"

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


        </>
    )
}

export default About