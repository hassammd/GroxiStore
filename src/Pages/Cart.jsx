import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bannerLeftTop from "/images/banner-left-top.png"
import bannerRight from "/images/about-us-banner-img.png"
import productCartImage from "/images/productCartImage.jpg"
const Cart = () => {
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
                            <span className="md:text-[22px] text-[18px] font-semibold text-lightGreen font-jost ">Cart</span>
                        </div>
                        <h1 className=" md:text-[60px] text-[32px] font-jost">Cart</h1>
                    </div>

                </div>
                <div className="absolute right-0 bottom-0 hidden lg:block">
                    <img src={bannerRight} alt="" className="xl:w-[100%] lg:w-[397px] md:w-[445px]" />

                </div>
            </section>


            {/* cart items */}

            <section className="pt-[100px] pb-[100px]">
                <div className="custom_container">
                    <div className="flex gap-[30px] w-100 mx-auto flex-wrap">

                        <div className=" border border-lightGray md:p-[40px] p-[15px]  lg:w-[67%] md:w-[100%] w-[100%]">

                            <div className=" hidden md:block border-b border-lightGray pb-6 ">
                                <div className="flex justify-between gap-6 uppercase">
                                    <div className="w-[3%]">

                                    </div>
                                    <div className="w-[35%]"><span>Product</span></div>
                                    <div className="w-[15%]"><span>Price</span></div>
                                    <div className="w-[15%]"><span>Qty</span></div>
                                    <div className="w-[10%]"><span>Total</span></div>

                                </div>
                            </div>

                            <div className=" border-b border-lightGray flex flex-wrap justify-between md:gap-6 gap-4 items-center pt-[20px] pb-[20px]">

                                <div className="md:w-[3%] w-[3% ]">
                                    <span><FontAwesomeIcon icon={faXmark} /></span>
                                </div>
                                <div className="md:w-[35%] w-[88%] flex items-center gap-3">
                                    <img src={productCartImage} alt="" className="w-[90px]" />
                                    <p className=" text-left font-medium">Lorem ipsum dolor sit amet. Ut quaerat suscipit.</p>

                                </div>
                                <div className="md:w-[15%] w-[20%]"><span>$20,00</span></div>
                                <div className="md:w-[15%] w-[40%] flex items-center justify-center gap-4 border border-lightGreen">
                                    <button>-</button>
                                    <div>0</div>
                                    <button>+</button></div>
                                <div className="md:w-[10%]"><span>$1000</span></div>

                            </div>

                            <div className=" border-b border-lightGray flex flex-wrap justify-between md:gap-6 gap-4 items-center pt-[20px] pb-[20px]">

                                <div className="md:w-[3%] w-[3% ]">
                                    <span><FontAwesomeIcon icon={faXmark} /></span>
                                </div>
                                <div className="md:w-[35%] w-[88%] flex items-center gap-3">
                                    <img src={productCartImage} alt="" className="w-[90px]" />
                                    <p className=" text-left font-medium">Lorem ipsum dolor sit amet. Ut quaerat suscipit.</p>

                                </div>
                                <div className="md:w-[15%] w-[20%]"><span>$20,00</span></div>
                                <div className="md:w-[15%] w-[40%] flex items-center justify-center gap-4 border border-lightGreen">
                                    <button>-</button>
                                    <div>0</div>
                                    <button>+</button></div>
                                <div className="md:w-[10%]"><span>$1000</span></div>

                            </div>

                            <div className=" border-b border-lightGray flex flex-wrap justify-between md:gap-6 gap-4 items-center pt-[20px] pb-[20px]">

                                <div className="md:w-[3%] w-[3% ]">
                                    <span><FontAwesomeIcon icon={faXmark} /></span>
                                </div>
                                <div className="md:w-[35%] w-[88%] flex items-center gap-3">
                                    <img src={productCartImage} alt="" className="w-[90px]" />
                                    <p className=" text-left font-medium">Lorem ipsum dolor sit amet. Ut quaerat suscipit.</p>

                                </div>
                                <div className="md:w-[15%] w-[20%]"><span>$20,00</span></div>
                                <div className="md:w-[15%] w-[40%] flex items-center justify-center gap-4 border border-lightGreen">
                                    <button>-</button>
                                    <div>0</div>
                                    <button>+</button></div>
                                <div className="md:w-[10%]"><span>$1000</span></div>

                            </div>



                        </div>
                        <div className="border border-lightGray lg:w-[30%] md:lg-[100%] w-[100%] pt-[38px] pb-[38px] pl-[30px] pr-[30px]">
                            <h4 className="font-bold pb-[20px]">Cart Totals</h4>
                            <div className="border-b border-lightGray flex justify-between pb-[10px] mb-[20px]">
                                <span className="md:text-[20px]">Subtotal</span>
                                <span className="md:text-[20px]">$604.89</span>
                            </div>
                            <div className="border-b border-lightGray flex justify-between pb-[10px] mb-[20px]">
                                <span className="md:text-[20px]">Total</span>
                                <span className="md:text-[20px]">$604.89</span>
                            </div>
                            <div>
                                <button className="font-jost uppercase md:text-[16px] text-[14px]  bg-green md:pt-[14px] md:pb-[14px] md:pl-[34px] md:pr-[34px] pt-[11px] pl-[30px] pb-[11px] pr-[30px]  text-white">Proceed To Checkout</button>

                            </div>

                        </div>
                    </div>

                </div>
            </section >

            {/* cart items */}
        </>
    )
}
export default Cart
