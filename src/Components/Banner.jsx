import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bannerLeftTop from "/images/banner-left-top.png"
import bannerRight from "/images/about-us-banner-img.png"

const Banner = () => {
    return (

        <>
            <section className="relative pt-[120px] pb-0 bg-blue h-[440px] md:h-[540px] ">
                <div className="hidden lg:block w-[100%] absolute left-0 top-0">

                    <img src={bannerLeftTop} alt="" />
                </div>
                <div className="custom_container">
                    <div className=" bg-white pt-[70px] pb-[70px] md:pt-[70px]  md:pb-[70px] pl-[30px] pr-[30px] md:w-[50%] w-[100%] mx-auto  b-top border-t-2 border-lightGreen">
                        <div className="flex items-center justify-center md:justify-center gap-6  mb-6">

                            <span className="md:text-[22px] text-[18px] font-semibold text-lightGreen">Home</span>
                            <span className="md:text-[22px] text-[18px] font-semibold text-lightGreen"><FontAwesomeIcon icon={faArrowRight} /></span>
                            <span className="md:text-[22px] text-[18px] font-semibold text-lightGreen">Cart</span>
                        </div>
                        <h1 className=" md:text-[60px] text-[32px]">Cart</h1>
                    </div>

                </div>
                <div className="absolute right-0 bottom-0 hidden lg:block">
                    <img src={bannerRight} alt="" className="xl:w-[100%] lg:w-[397px] md:w-[445px]" />

                </div>
            </section>

        </>
    )
}

export default Banner