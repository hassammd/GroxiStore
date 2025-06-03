import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import blogfooter from "/images/blog-footer.png"

const Footer = () => {
    return (
        <>

            <section className="md:pt-[250px] relative pt-[50px] bg-green">
                <div className="custom_container">
                    <div className="absolute top-[-330px]">
                        <div>
                            <img src={blogfooter} alt="" />

                        </div>
                    </div>

                    <div className="flex w-full flex-wrap pb-[50px] gap-10 md:justify-between justify-between  md:pb-[90px]">
                        <div className="flex flex-col md:flex-col md:w-[20%] w-[40%]">
                            <span className=" md:mb-[15px] text-left text-white md:text-[23px] font-medium font-jost">Store Location</span>
                            <ul className="flex flex-col  gap-[10px]">
                                <li className="text-greenFamily md:text-[18px] text-[16px] font-barlow flex flex-col justify-start items-start text-left"><span>Address:</span>121 King Street Melbourne,3000,
                                    Australia</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px] font-barlow flex flex-col justify-center items-start"><span>Email:</span>info@groxistore.com</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px] font-barlow flex flex-col justify-center items-start"><span>Phone:</span>+1 23 45 6789</li>
                            </ul>
                        </div>
                        <div className="flex flex-col md:flex-col md:w-[20%] w-[40%]">
                            <span className="md:mb-[15px] text-left text-white md:text-[23px] font-medium font-jost">Useful Links</span>
                            <ul className="flex flex-col  gap-[10px]">
                                <li className="text-greenFamily md:text-[18px] text-[16px] font-barlow flex flex-col justify-start items-start text-left">About Us</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px] font-barlow flex flex-col justify-center items-start">Blog</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px] font-barlow flex flex-col justify-center items-start">Check out</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px] font-barlow flex flex-col justify-center items-start">Contact</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px] font-barlow flex flex-col justify-center items-start">Service</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px] font-barlow flex flex-col justify-center items-start">Shop</li>
                            </ul>
                        </div>
                        <div className="flex flex-col md:flex-col md:w-[20%]">
                            <span className="md:mb-[15px] text-left text-white md:text-[23px] font-medium font-jost">Categories</span>
                            <ul className="flex flex-col  gap-[10px]">
                                <li className="text-greenFamily md:text-[18px] text-[16px]  font-barlow flex flex-col justify-center items-start">Fruits & Vegetables</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px]  font-barlow flex flex-col justify-center items-start">Dairy Products</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px]  font-barlow flex flex-col justify-center items-start">Package Foods</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px]  font-barlow flex flex-col justify-center items-start">Health & Wellness</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px]  font-barlow flex flex-col justify-center items-start">Meat Varieties</li>
                            </ul>
                        </div>
                        <div className="flex flex-col md:flex-col md:w-[20%]">
                            <span className="md:mb-[15px] text-left text-white md:text-[23px] font-medium font-jost">Opening Hours</span>
                            <ul className="flex flex-col  gap-[10px]">
                                <li className="text-greenFamily md:text-[18px] text-[16px] font-barlow flex flex-col justify-start items-start text-left"><span>Monday – Saturday</span>12.00 – 14.45</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px] font-barlow flex flex-col justify-center items-start"><span>Sunday – Thursday</span>17.30 – 00.00</li>
                                <li className="text-greenFamily md:text-[18px] text-[16px] font-barlow flex flex-col justify-center items-start"><span>Friday – Saturday</span>17.30 – 00.00</li>
                            </ul>
                        </div>

                    </div>


                </div>
                <div>
                    <hr className="bg-white text-greenFamily opacity-30" />
                </div>
                <div className="custom_container">
                    <div className="flex justify-between gap-6 md:flex-row flex-col items-center md:pt-[38px] md:pb-[38px] pt-[20px] pb-[20px]">
                        <div>
                            <p className="text-greenFamily text-[16px] md:text-[18px]"> Copyright 2024, Groxi Store. All Rights Reserved.</p>

                        </div>
                        <div className="flex items-center md:gap-10 gap-6">
                            <span className="text-greenFamily">Follow Us:</span>
                            <ul className="flex md:gap-8 gap-4 text-greenFamily">
                                <li><FontAwesomeIcon icon={faFacebookF} /></li>
                                <li><FontAwesomeIcon icon={faXTwitter} /></li>
                                <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                                <li><FontAwesomeIcon icon={faPinterestP} /></li>
                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Footer