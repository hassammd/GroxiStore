import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import commas from "/images/commas.png"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const Testimonials = () => {
    return (
        <>
            <section className="md:pt-[100px] md:pb-[100px] pt-[40px] pb-[40px]">
                <div className="custom_container">



                    <div>
                        <span class="text-[22px] font-semibold text-lightGreen">Testimonials</span>
                        <h3 class="md:text-[45px] text-[26px] font-bold leading-[49px] md:mb-[45px] mb-[25px]">What Our Customers Saying</h3>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10">
                        <div class="flex flex-col justify-start text-left bg-blue b-top border-t-[2px] border-lightGreen pt-[60px] pb-[60px] pl-[48px] pr-[48px]">
                            <img src={commas} alt="" className="w-[42px] h-[31px] mb-[25px]" />
                            <p class="md:mb-[24px] italic text-center lg:text-left md:text-[23px] text-darkGray font-barlow md:leading-[35px]">”Quisquam est, qui dolorem ipsum quia dolor sit
                                consectetur adipisci velit sed quia non numqua
                                eius modi tempora incidunt ut labore et dolore
                                magnam aliquam quaerat voluptatem repudia
                                sint et molestiae”</p>
                            <div>
                                <ul className="flex gap-2 justify-left">

                                    <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                    <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                    <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                    <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                    <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>

                                </ul>
                                <div className="flex gap-4 items-center">
                                    <p className="md:text-[22px] font-semibold">Alina Parker</p>
                                    <span className="text-[16px] font-semibold text-lightGreen">Ceo, GTD</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col justify-start text-left bg-blue b-top border-t-[2px] border-lightGreen pt-[60px] pb-[60px] pl-[48px] pr-[48px]">
                            <img src={commas} alt="" className="w-[42px] h-[31px] mb-[25px]" />
                            <p class="md:mb-[24px] italic text-center lg:text-left md:text-[23px] text-darkGray font-barlow md:leading-[35px]">”Quisquam est, qui dolorem ipsum quia dolor sit
                                consectetur adipisci velit sed quia non numqua
                                eius modi tempora incidunt ut labore et dolore
                                magnam aliquam quaerat voluptatem repudia
                                sint et molestiae”</p>
                            <div>
                                <ul className="flex gap-2 justify-left">

                                    <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                    <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                    <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                    <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>
                                    <li><FontAwesomeIcon className="text-yellowColor" icon={faStar} /></li>

                                </ul>
                                <div className="flex gap-4 items-center">
                                    <p className="md:text-[22px] font-semibold">Alina Parker</p>
                                    <span className="text-[16px] font-semibold text-lightGreen">Ceo, GTD</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Testimonials