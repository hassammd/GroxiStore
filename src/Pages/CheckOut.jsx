import { faArrowRight, faStar, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bannerLeftTop from "/images/banner-left-top.png"
import bannerRight from "/images/about-us-banner-img.png"
import blogImage4 from "/images/card3.png"
import Footer from "../Components/Footer"
import BrandSection from "../Components/BrandsSection"


const CheckOut = () => {
    return (
        <>

            <section className=" relative pt-[120px] pb-0 bg-blue h-[440px] md:h-[540px] ">
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


            <section className="mt-[100px] mb-[100px]">
                <div className="custom_container">

                    <form action="">
                        <div className="flex flex-wrap gap-8">
                            <div className="flex md:flex-col gap-8 w-full   lg:w-[60.7%] flex-wrap">
                                <div className="w-full border border-lightGray p-[39px]">
                                    <h3 className="text-[24px] md:text-left">Contact Information</h3>
                                    <ul className="flex gap-4 sm:flex-row  sm:flex-wrap   flex-col">
                                        <li className="flex lg:w-[48.5%] md:w-[48.7%%] sm:w-[48.5%] flex-col items-start gap-2 ">
                                            <label >First name *</label>
                                            <input type="text" className=" md:pt-[14px] md:pb-[14px] md:pl-[20px] pr-[8px] pt-[8px] pb-[8px] pl-[8px]  w-full border border-lightGray" />
                                        </li>
                                        <li className="flex flex-col items-start gap-2 lg:w-[48.5%] md:w-[48.7%] sm:w-[48.5%]">
                                            <label htmlFor="">Last name *</label>
                                            <input type="text" className=" md:pt-[14px] md:pb-[14px] md:pl-[20px] md:pr-[20px] pr-[8px] pt-[8px] pb-[8px] pl-[8px] w-full border border-lightGray" />
                                        </li>
                                        <li className="sm:w-[100%] flex flex-col items-start gap-2">
                                            <label htmlFor="">Email address *</label>
                                            <input type="text" className=" md:pt-[14px] md:pb-[14px] md:pl-[20px] md:pr-[20px] pr-[8px] pt-[8px] pb-[8px] pl-[8px] w-full border border-lightGray" />
                                        </li>
                                    </ul>



                                </div>
                                <div className="w-full border border-lightGray p-[39px]">
                                    <h3 className="text-[24px] md:text-left">Delivery Information</h3>

                                    <ul className="flex gap-4 sm:flex-row  sm:flex-wrap   flex-col">
                                        <li className="flex lg:w-[48.5%] md:w-[48.7%] sm:w-[48.5%] flex-col items-start gap-2 ">
                                            <label >Street address *</label>
                                            <input type="text" required className=" md:pt-[14px] md:pb-[14px] md:pl-[20px] md:pr-[20px] pr-[8px] pt-[8px] pb-[8px] pl-[8px] w-full border border-lightGray" />
                                        </li>
                                        <li className="flex flex-col items-start gap-2 lg:w-[48.5%] md:w-[48.7%] sm:w-[48.5%]">
                                            <label htmlFor="">Town/City *</label>
                                            <input type="text" className=" md:pt-[14px] md:pb-[14px] md:pl-[20px] md:pr-[20px] pr-[8px] pt-[8px] pb-[8px] pl-[8px] w-full border border-lightGray" />
                                        </li>
                                        <li className="flex flex-col items-start gap-2 lg:w-[48.5%] md:w-[48.7%] sm:w-[48.5%]">
                                            <label htmlFor="">Country *</label>
                                            <input type="text" className=" md:pt-[14px] md:pb-[14px] md:pl-[20px] md:pr-[20px] pr-[8px] pt-[8px] pb-[8px] pl-[8px] w-full border border-lightGray" />
                                        </li>
                                        <li className="flex flex-col items-start gap-2 lg:w-[48.5%] md:w-[48.7%] sm:w-[48.5%]">
                                            <label htmlFor="">Postcode  *</label>
                                            <input type="text" className=" md:pt-[14px] md:pb-[14px] md:pl-[20px] md:pr-[20px] pr-[8px] pt-[8px] pb-[8px] pl-[8px] w-full border border-lightGray" />
                                        </li>
                                        <li className="flex gap-2 items-center sm:w-[48.6%]">

                                            <input type="checkbox" className=" pt-[8px] pb-[14px] pl-[20px] pr-[20px] border border-lightGray" />
                                            <label htmlFor="">use a different billing address</label>
                                        </li>

                                    </ul>



                                </div>
                            </div>
                            <div className="flex md:flex-row flex-wrap lg:w-[36%] gap-8 md:w-[100%] w-full">
                                <div className="p-[20px] lg:w-full  md:w-[48.2%] border border-lightGray">

                                    <h3 className="text-[24px]">Order Summary</h3>
                                    <div className="pb-[15px] mb-[20px] flex justify-between  border-b border-lightGray">
                                        <span>Product</span>
                                        <span>Subtotal</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-lightGray mb-[20px] pb-[20px]">
                                        <div className="flex gap-4 md:w-[76%]">
                                            <div className="w-[33%]">

                                                <figure className="">
                                                    <img src={blogImage4} alt="" />
                                                </figure>
                                            </div>
                                            <div className="w-[45%]">

                                                <p className="text-[14px] text-left ">Lorem ipsum dolor sit amet. Ut quaerat suscipit.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="md:text-[18px]">17.99 $</span>
                                        </div>

                                    </div>

                                    <div className="flex justify-between pb-[15px] mb-[20px] border-b border-lightGray">
                                        <span>Subtotal</span>
                                        <span className="md:text-[18px]">17.99 $</span>
                                    </div>
                                    <div className="flex justify-between pb-[15px] mb-[20px]  ">
                                        <span className="md:text-[18px] font-semibold">Total</span>
                                        <span className="md:text-[18px] font-semibold text-lightGreen">9.00 $</span>
                                    </div>
                                </div>

                                <div className="lg:w-full md:w-[48.2%] p-[20px] border border-lightGray">
                                    <h3 className="text-[24px]">Order Summary</h3>
                                    <p className="text-left text-[16px] text-Gray">Explore our convenient payment option & proceed with confidence</p>
                                    <button>Submit</button>
                                </div>




                            </div>
                        </div>
                    </form>


                </div>
            </section >

            {/* checkout section */}
            < BrandSection />
            <section>


                <Footer />
            </section>
        </>
    )
}

export default CheckOut