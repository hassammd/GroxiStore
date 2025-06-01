
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import seller1 from "/images/seller1.png"
import seller2 from "/images/seller2.png"
import seller3 from "/images/seller3.png"
import seller4 from "/images/seller4.png"
import seller5 from "/images/seller5.png"
import seller6 from "/images/seller6.png"

const FeaturedProductsSection = () => {
    return (
        <>

            <section className="bg-blue pt-[40px] pb-[40px] md:pt-[100px] md:pb-[100px]">

                <div className="custom_container">
                    <span className="text-[22px] font-semibold text-lightGreen">Best Sellers</span>
                    <h3 className="md:text-[45px] text-[26px] font-bold leading-[49px] md:mb-[45px] mb-[25px]">Featured Products</h3>
                    <div>
                        <ul className="flex items-center justify-center md:gap-12 gap-6 md:text-[23px] text-[18px] font-semibold mb-[50px] cursor-pointer ">
                            <li className="hover:text-lightGreen">All</li>
                            <li className="hover:text-lightGreen">Fruits</li>
                            <li className="hover:text-lightGreen">Health</li>
                            <li className="hover:text-lightGreen">Meat</li>
                            <li className="hover:text-lightGreen">Dairy</li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-[30px]  w-full justify-center md:justify-start ">



                        <div className="relative bg-white md:w-[48%] lg:w-[31.5%] sm:w-[47%] w-[100%]  flex flex-col   items-center pt-[65px] pb-[65px] pl-[50px] pr-[50px] border border-transparent hover:border hover:border-lightGreen group ">
                            <div>
                                <span className="absolute top-[20px] right-[20px] bg-white h-[32px] w-[32px] flex items-center justify-center  rounded-full group-hover:bg-lightGreen transition-all duration-500   "><FontAwesomeIcon icon={faHeart} className="group-hover:text-white" /></span>
                            </div>
                            <figure className="h-[224px]">

                                <img src={seller1} alt="" className="mb-12 h-auto" />
                            </figure>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <ul className="flex gap-2 justify-center">

                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                </div>
                                <h3 className="font-bold text-[26px] font-jost">Beef Steak</h3>
                                <div className="flex gap-4 justify-center text-[20px] items-center md:justify-center">
                                    <div className="line-through ">$15</div>
                                    <span className="text-lightGreen text-[20px] font-bold">$12</span>

                                </div>
                                <button class="bg-green pt-2 pb-2 pl-8 pr-8 text-white font-barlow uppercase group-hover:bg-lightGreen transition-all duration-500">Add to cart</button>
                            </div>

                        </div>
                        <div className="relative bg-white md:w-[48%] lg:w-[31.5%] sm:w-[47%] w-[100%]   flex  flex-col  items-center col md:items-center pt-[65px] pb-[65px] pl-[50px] pr-[50px] border border-transparent hover:border hover:border-lightGreen group ">
                            <div>
                                <span className="absolute top-[20px] right-[20px] bg-white h-[32px] w-[32px] flex items-center justify-center  rounded-full group-hover:bg-lightGreen transition-all duration-500   "><FontAwesomeIcon icon={faHeart} className="group-hover:text-white" /></span>
                            </div>
                            <figure className="h-[224px]">

                                <img src={seller2} alt="" className="mb-12" />
                            </figure>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <ul className="flex gap-2 justify-center">

                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                </div>
                                <h3 className="font-bold text-[26px] font-jost">Beef Steak</h3>
                                <div className="flex gap-4 justify-center text-[20px] items-center md:justify-center">
                                    <div className="line-through ">$15</div>
                                    <span className="text-lightGreen text-[20px] font-bold">$12</span>

                                </div>
                                <button class="bg-green pt-2 pb-2 pl-8 pr-8 font-barlow text-white uppercase group-hover:bg-lightGreen transition-all duration-500">Add to cart</button>
                            </div>

                        </div>
                        <div className="relative bg-white md:w-[48%] lg:w-[31.5%] sm:w-[47%] w-[100%]   flex  flex-col  items-center col md:items-center pt-[65px] pb-[65px] pl-[50px] pr-[50px] border border-transparent hover:border hover:border-lightGreen group ">
                            <div>
                                <span className="absolute top-[20px] right-[20px] bg-white h-[32px] w-[32px] flex items-center justify-center  rounded-full group-hover:bg-lightGreen transition-all duration-500   "><FontAwesomeIcon icon={faHeart} className="group-hover:text-white" /></span>
                            </div>
                            <figure className="h-[224px]">
                                <img src={seller3} alt="" className="mb-12" />
                            </figure>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <ul className="flex gap-2 justify-center">

                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                </div>
                                <h3 className="font-bold text-[26px] font-jost">Beef Steak</h3>
                                <div className="flex gap-4 justify-center text-[20px] items-center md:justify-center">
                                    <div className="line-through ">$15</div>
                                    <span className="text-lightGreen text-[20px] font-bold">$12</span>

                                </div>
                                <button class="bg-green pt-2 pb-2 pl-8 pr-8 font-barlow text-white uppercase group-hover:bg-lightGreen transition-all duration-500">Add to cart</button>
                            </div>

                        </div>
                        <div className="relative bg-white md:w-[48%] lg:w-[31.5%] sm:w-[47%] w-[100%]  flex flex-col items-center col md:items-center pt-[65px] pb-[65px] pl-[50px] pr-[50px] border border-transparent hover:border hover:border-lightGreen group ">
                            <div>
                                <span className="absolute top-[20px] right-[20px] bg-white h-[32px] w-[32px] flex items-center justify-center  rounded-full group-hover:bg-lightGreen transition-all duration-500   "><FontAwesomeIcon icon={faHeart} className="group-hover:text-white" /></span>
                            </div>
                            <figure className="h-[224px]">
                                <img src={seller4} alt="" className="mb-12" />
                            </figure>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <ul className="flex gap-2 justify-center">

                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                </div>
                                <h3 className="font-bold text-[26px] font-jost">Fresh Honey</h3>
                                <div className="flex gap-4 justify-center text-[20px] items-center md:justify-center">
                                    <div className="line-through ">$15</div>
                                    <span className="text-lightGreen text-[20px] font-bold">$12</span>

                                </div>
                                <button class="bg-green pt-2 pb-2 pl-8 pr-8 font-barlow text-white uppercase group-hover:bg-lightGreen transition-all duration-500">Add to cart</button>
                            </div>

                        </div>
                        <div className="relative bg-white md:w-[48%] lg:w-[31.5%] sm:w-[47%] w-[100%]  flex  flex-col items-center col md:items-center pt-[65px] pb-[65px] pl-[50px] pr-[50px] border border-transparent hover:border hover:border-lightGreen group ">
                            <div>
                                <span className="absolute top-[20px] right-[20px] bg-white h-[32px] w-[32px] flex items-center justify-center  rounded-full group-hover:bg-lightGreen transition-all duration-500   "><FontAwesomeIcon icon={faHeart} className="group-hover:text-white" /></span>
                            </div>
                            <figure className="h-[224px]">
                                <img src={seller5} alt="" className="mb-12" />
                            </figure>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <ul className="flex gap-2 justify-center">

                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                </div>
                                <h3 className="font-bold text-[26px] font-jost">Fresh Milk</h3>
                                <div className="flex gap-4 justify-center text-[20px] items-center md:justify-center">
                                    <div className="line-through ">$15</div>
                                    <span className="text-lightGreen text-[20px] font-bold">$12</span>

                                </div>
                                <button class="bg-green pt-2 pb-2 pl-8 pr-8 font-barlow text-white uppercase group-hover:bg-lightGreen transition-all duration-500">Add to cart</button>
                            </div>

                        </div>
                        <div className="relative bg-white md:w-[48%] lg:w-[31.5%] sm:w-[47%] w-[100%]   flex flex-col items-center col md:items-center pt-[65px] pb-[65px] pl-[50px] pr-[50px] border border-transparent hover:border hover:border-lightGreen group ">
                            <div>
                                <span className="absolute top-[20px] right-[20px] bg-white h-[32px] w-[32px] flex items-center justify-center  rounded-full group-hover:bg-lightGreen transition-all duration-500   "><FontAwesomeIcon icon={faHeart} className="group-hover:text-white" /></span>
                            </div>
                            <figure className="h-[224px]">
                                <img src={seller6} alt="" className="mb-12" />
                            </figure>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <ul className="flex gap-2 justify-center">

                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                </div>
                                <h3 className="font-bold text-[26px] font-jost">Mango Beverage</h3>
                                <div className="mb-4 flex gap-4 justify-center text-[20px] items-center md:justify-center">
                                    <div className="line-through ">$15</div>
                                    <span className="text-lightGreen text-[20px] font-bold">$12</span>

                                </div>
                            </div>
                            <button class="bg-green pt-2 pb-2 pl-8 pr-8 font-barlow  text-white uppercase group-hover:bg-lightGreen transition-all duration-500">Add to cart</button>

                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default FeaturedProductsSection