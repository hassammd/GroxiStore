import aboutUsImage from "/images/about-us-img.png"
import aboutUsFruits from "/images/about-us-fruits.png"

const AboutUsSection = () => {
    return (

        <>

            <section className=" bg-blue pt-[100px] relative">

                <div className="custom_container">

                    <div>
                        <div className="absolute right-0 opacity-50">
                            <img src={aboutUsFruits} alt="" />
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="w-1/2">

                            <div className="absolute bottom-0 left-0">
                                <img src={aboutUsImage} alt="" />
                            </div>
                        </div>

                        <div className="w-1/2">
                            <div className="flex flex-col justify-start text-left bg-white b-top border-t-[2px] border-lightGreen pt-[80px] pb-[80px] pl-[68px] pr-[68px]">
                                <h5 className="font-jost text-[22px] leading-[30px] font-semibold text-lightGreen mb-[15px]">About Us</h5>
                                <h2 className="text-[45px] font-semibold font-jost leading-[51px] mb-[10px]">We Provide You The Best Experience</h2>
                                <p className="font-[22px] text-darkGray font-barlow leading-[28px]">Neque porro quisquam est aui dolorem iesum ruia dolor
                                    sit amet, consectetur, adipisci velit, sed quia non numua
                                    eius modi tempora incidunt ut labore et dolore magnam
                                    volutatem exercitationem ullam.</p>
                                <p className="font-[22px] text-darkGray font-barlow leading-[28px]">Quis autem vel eum iure reprehenderit aui in ea voluptae
                                    velit esse quam nihil molestiae consequatur, vel illum rui
                                    dolorem eum fugiat quo voluptas.</p>

                                <button className="mt-[32px] font-barlow bg-lightGreen pt-[14px] pb-[14px] pl-[34px] pr-[34px] text-white text-[16px] uppercase w-[175px]">Read more</button>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUsSection