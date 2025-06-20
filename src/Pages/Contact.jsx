import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bannerLeftTop from "/images/banner-left-top.png"
import bannerRight from "/images/about-us-banner-img.png"
import productCartImage from "/images/productCartImage.jpg"
import locationImage from "/images/location-img.png"
import phoneImage from "/images/phone-img.png"
import emailImage from "/images/email-img.png"



const Contact = () => {
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
                            <span className="md:text-[22px] text-[18px] font-semibold text-lightGreen font-jost ">Contact</span>
                        </div>
                        <h1 className=" md:text-[60px] text-[32px] font-jost">Contact</h1>
                    </div>

                </div>
                <div className="absolute right-0 bottom-0 hidden lg:block">
                    <img src={bannerRight} alt="" className="xl:w-[100%] lg:w-[397px] md:w-[445px]" />

                </div>
            </section>



            {/* contact form section */}



            <section className="pt-[120px] pb-[120px]">
                <div className="custom_container">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-[70%]  md:w-[60%] bg-blue md:pt-[60px] md:pb-[74px] md:pl-[40px] md:pr-[40px] pt-[40px] pl-[30px] pb-[40px] pr-[30px]">
                            <h2 className="mb-8 md:text-left text-[28px] text-center">Get In Touch</h2>
                            <form action="" className="flex flex-wrap gap-4">
                                <ul className="flex gap-4 flex-wrap w-100">
                                    <li className="lg:w-[48.8%] md:w-[47.5%] w-[100%]"><input type="text" placeholder="Name" className="focus:focusGlow  w-full pt-[13px] pb-[13px] pl-[19px] pr-[19px] focus:outline-none " />
                                    </li>
                                    <li className="lg:w-[48.8%] md:w-[47.5%] w-[100%]"><input className="w-full focus:shadow-lg focus:focusGlow  pt-[13px] pb-[13px] pl-[19px] pr-[19px] focus:outline-none" type="text" placeholder="Email" /></li>
                                    <li className="lg:w-[48.8%] md:w-[47.5%] w-[100%]"><input type="text" placeholder="Phone" className="w-full pt-[13px] pb-[13px] pl-[19px] pr-[19px] focus:outline-none" /></li>
                                    <li className="lg:w-[48.8%] md:w-[47.5%] w-[100%]"><input type="text" placeholder="Address" className="w-full pt-[13px] pb-[13px] pl-[19px] pr-[19px] focus:outline-none" /></li>
                                    <li className="md:w-[100%]  w-[100%]">   <textarea name="" placeholder="Message" rows={6} id="" className="w-full pt-[13px] pb-[13px] pl-[19px] pr-[19px] focus:outline-none"></textarea></li>
                                </ul>

                                <button class="font-jost uppercase md:text-[16px] text-[14px]  bg-primary md:pt-[14px] md:pb-[14px] md:pl-[34px] md:pr-[34px] pt-[11px] pl-[30px] pb-[11px] pr-[30px]  text-white">Send now</button>


                            </form>
                        </div>
                        <div className="w-full lg:w-[30%] md:w-[40%] bg-lightGreen md:pt-[60px] md:pb-[60px] md:pl-[40px] md:pr-[40px] pt-[40px] pb-[40px] pl-[30px] pr-[30px] text-white">

                            <div>
                                <h2 className="md:text-left text-[28px] text-center">Reach Us</h2>
                                <p className="md:text-left text-center text-[16px] mb-6">Aui dolorem iesum ruia dolor sit amet, consectetur.</p>
                                <div className="flex flex-col  md:gap-8 gap-6">
                                    <div className="flex items-center justify-start gap-4">
                                        <div className="md:w-[15%] w-[10%]">
                                            <img src={locationImage} alt="" />
                                        </div>
                                        <div className="w-[85%]">

                                            <h4 className="text-left hover:text-green transition-all duration-500 text-[20px]">Location</h4>

                                            <p className="text-left text-[16px]">121 King Street Melbourne, 3000, Australia</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <div className="md:w-[15%] w-[10%]">
                                            <img src={phoneImage} alt="" />
                                        </div>
                                        <div className="w-[85%]">

                                            <h4 className="text-left text-[20px]">Phone</h4>
                                            <p className="text-left hover:text-green transition-all duration-500  hover:cursor-pointer text-[16px]">0-589-96369-95823</p>
                                            <p className="text-left hover:text-green transition-all duration-500  hover:cursor-pointer text-[16px]">0-825-63596-471254</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <div className="md:w-[15%] w-[10%]">
                                            <img src={emailImage} alt="" />
                                        </div>
                                        <div className="w-[85%]">

                                            <h4 className="text-left text-[20px]">Email</h4>
                                            <p className="text-left hover:text-green transition-all duration-500  hover:cursor-pointer text-[16px]">Groxistore@gmail.com</p>
                                            <p className="text-left hover:text-green transition-all duration-500  hover:cursor-pointer text-[16px]">info@groxistore.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* contact form section */}

        </>
    )
}

export default Contact