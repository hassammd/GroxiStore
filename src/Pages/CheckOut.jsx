import { faArrowRight, faStar, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bannerLeftTop from "/images/banner-left-top.png"
import bannerRight from "/images/about-us-banner-img.png"


const CheckOut = () => {
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
                            <span className="md:text-[22px] text-[18px] font-semibold text-lightGreen font-jost ">Checkout</span>
                        </div>
                        <h1 className=" md:text-[60px] text-[32px] font-jost">Checkout</h1>
                    </div>

                </div>
                <div className="absolute right-0 bottom-0 hidden lg:block">
                    <img src={bannerRight} alt="" className="xl:w-[100%] lg:w-[397px] md:w-[445px]" />

                </div>
            </section>



            {/* checkout section */}


            <section>
                <div className="custom_container">

                    <div>
                        <div className="flex gap-6">
                            <div className="w-full border border-lightGray p-[22px]">
                                <h3 className="text-[24px]">Contact Information</h3>
                                <form action="">
                                    <ul className="flex gap-4 sm:flex-row  sm:flex-wrap   flex-col">
                                        <li className="flex sm:w-[48.6%] flex-col items-start gap-2 ">
                                            <label >First name *</label>
                                            <input type="text" className=" pt-[6px] pb-[6px] pl-[20px] pr-[20px] w-full border border-lightGray" />
                                        </li>
                                        <li className="flex flex-col items-start gap-2 sm:w-[48.6%]">
                                            <label htmlFor="">Last name *</label>
                                            <input type="text" className=" pt-[6px] pb-[6px] pl-[20px] pr-[20px] w-full border border-lightGray" />
                                        </li>
                                        <li className="sm:w-[100%] flex flex-col items-start gap-2">
                                            <label htmlFor="">Email address *</label>
                                            <input type="text" className=" pt-[6px] pb-[6px] pl-[20px] pr-[20px] w-full border border-lightGray" />
                                        </li>
                                    </ul>
                                </form>


                            </div>
                        </div>
                    </div>



                </div>
            </section>

            {/* checkout section */}
        </>
    )
}

export default CheckOut