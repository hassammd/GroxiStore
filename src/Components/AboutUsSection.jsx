import aboutUsImage from "/images/about-us-img.png"
import aboutUsFruits from "/images/about-us-fruits.png"

const AboutUsSection = () => {
    return (

        <>

            <section className=" bg-blue pt-[100px] relative">

                <div className="custom_container">

                    <div className="hidden lg:hidden xl:block">
                        <div className="absolute right-0 opacity-50">
                            <img src={aboutUsFruits} alt="" />
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="hidden lg:block w-1/2">

                            <div className="absolute lg:bottom-[122px] left-0 lg:w-[459px] xl:bottom-[0] xl:w-[719px]">
                                <img src={aboutUsImage} alt="" />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-col justify-start text-left bg-white b-top border-t-[2px] border-lightGreen pt-[60px] pb-[60px] pl-[48px] pr-[48px]">
                                <h5 className="font-jost lg:text-left text-center text-[22px] leading-[30px] font-semibold text-lightGreen mb-[15px]">About Us</h5>
                                <h2 className="text-[28px] lg:text-[45px] lg:text-left font-semibold text-center font-jost leading-10 mb-[10px]">We Provide You The Best Experience</h2>
                                <p className="font-[22px] lg:text-left  md:font-[38px] lg:font-[45px]  text-center text-darkGray font-barlow leading-[28px] mb-[20px]">Neque porro quisquam est aui dolorem iesum ruia dolor
                                    sit amet, consectetur, adipisci velit, sed quia non numua
                                    eius modi tempora incidunt ut labore et dolore magnam
                                    volutatem exercitationem ullam.</p>
                                <p className="text-center lg:text-left font-[22px] text-darkGray font-barlow leading-[28px]">Quis autem vel eum iure reprehenderit aui in ea voluptae
                                    velit esse quam nihil molestiae consequatur, vel illum rui
                                    dolorem eum fugiat quo voluptas.</p>
                                <div className="flex items-center justify-center lg:justify-start mt-[22px] ">

                                    <button className="text-center font-barlow bg-lightGreen pt-[11px] pb-[11px] pl-[18px] pr-[18px] text-white text-[14px] uppercase w-[125px] lg:w-[175px] lg:text-[16    px]">Read more</button>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUsSection