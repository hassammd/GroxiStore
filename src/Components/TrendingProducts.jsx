import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import trendhome1 from "/images/trend-home1.png"
import trendhome2 from "/images/trend-home2.png"
import trendhome3 from "/images/trend-home3.png"
import trendhome4 from "/images/trend-home4.png"
import trendhome5 from "/images/trend-home5.png"
import trendhome6 from "/images/trend-home6.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import broccoli from "/images/broccoli.png"
const TrendingProducts = () => {
    return (

        <>

            <section className="md:pt-[100px] pb-[100px]">
                <div className="custom_container">
                    <span className="text-[22px] font-semibold text-lightGreen">Most Popular</span>
                    <h3 className="text-[45px] font-bold leading-[49px] mb-[45px]">Trending Products</h3>
                    <div className="flex flex-wrap gap-[30px]  w-full justify-center md:justify-start ">


                        <div className="relative bg-grayColor md:w-[31.55%] w-[100%]  flex flex-col   items-center pt-[65px] pb-[65px] pl-[50px] pr-[50px] border border-transparent hover:border hover:border-lightGreen group ">
                            <div>
                                <span className="absolute top-[20px] right-[20px] bg-white h-[32px] w-[32px] flex items-center justify-center  rounded-full group-hover:bg-lightGreen transition-all duration-500   "><FontAwesomeIcon icon={faHeart} className="group-hover:text-white" /></span>
                            </div>
                            <figure className="h-[224px]">

                                <img src={trendhome1} alt="" className="mb-12 h-auto" />
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
                                <button class="bg-green font-barlow pt-2 pb-2 pl-8 pr-8 text-white font-barlow uppercase group-hover:bg-lightGreen transition-all duration-500">Add to cart</button>
                            </div>

                        </div>
                        <div className="relative bg-grayColor md:w-[31.55%] w-[100%]   flex  flex-col  items-center col md:items-center pt-[65px] pb-[65px] pl-[50px] pr-[50px] border border-transparent hover:border hover:border-lightGreen group ">
                            <div>
                                <span className="absolute top-[20px] right-[20px] bg-white h-[32px] w-[32px] flex items-center justify-center  rounded-full group-hover:bg-lightGreen transition-all duration-500   "><FontAwesomeIcon icon={faHeart} className="group-hover:text-white" /></span>
                            </div>
                            <figure className="h-[224px]">

                                <img src={trendhome3} alt="" className="mb-12" />
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
                        <div className="relative bg-grayColor md:w-[31.55%]  w-[100%]   flex  flex-col  items-center col md:items-center pt-[65px] pb-[65px] pl-[50px] pr-[50px] border border-transparent hover:border hover:border-lightGreen group ">
                            <div>
                                <span className="absolute top-[20px] right-[20px] bg-white h-[32px] w-[32px] flex items-center justify-center  rounded-full group-hover:bg-lightGreen transition-all duration-500   "><FontAwesomeIcon icon={faHeart} className="group-hover:text-white" /></span>
                            </div>
                            <figure className="h-[224px]">
                                <img src={trendhome2} alt="" className="mb-12" />
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
                        <div className="relative bg-grayColor md:w-[31.55%] w-[100%]  flex flex-col items-center col md:items-center pt-[65px] pb-[65px] pl-[50px] pr-[50px] border border-transparent hover:border hover:border-lightGreen group ">
                            <div>
                                <span className="absolute top-[20px] right-[20px] bg-white h-[32px] w-[32px] flex items-center justify-center  rounded-full group-hover:bg-lightGreen transition-all duration-500   "><FontAwesomeIcon icon={faHeart} className="group-hover:text-white" /></span>
                            </div>
                            <figure className="h-[224px]">
                                <img src={trendhome4} alt="" className="mb-12" />
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
                        <div className="relative bg-grayColor md:w-[31.55%]  w-[100%]  flex  flex-col items-center col md:items-center pt-[65px] pb-[65px] pl-[50px] pr-[50px] border border-transparent hover:border hover:border-lightGreen group ">
                            <div>
                                <span className="absolute top-[20px] right-[20px] bg-white h-[32px] w-[32px] flex items-center justify-center  rounded-full group-hover:bg-lightGreen transition-all duration-500   "><FontAwesomeIcon icon={faHeart} className="group-hover:text-white" /></span>
                            </div>
                            <figure className="h-[224px]">
                                <img src={trendhome5} alt="" className="mb-12" />
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
                        <div className="relative bg-grayColor md:w-[31.55%]  w-[100%]   flex flex-col items-center col md:items-center pt-[65px] pb-[65px] pl-[50px] pr-[50px] border border-transparent hover:border hover:border-lightGreen group ">
                            <div>
                                <span className="absolute top-[20px] right-[20px] bg-white h-[32px] w-[32px] flex items-center justify-center  rounded-full group-hover:bg-lightGreen transition-all duration-500   "><FontAwesomeIcon icon={faHeart} className="group-hover:text-white" /></span>
                            </div>
                            <figure className="h-[224px]">
                                <img src={trendhome6} alt="" className="mb-12" />
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
            </section >
        </>
    )
}
export default TrendingProducts