import quality from "/images/quality.png"
import basket from "/images/basket.png"
import delivery from "/images/delivery.png"
import onlineorder from "/images/online-order.png"
import service from "/images/24service.png"
const FeatureSection = () => {
    return (
        <>



            <section className="pt-[100px] pb-[100px]">

                <div className="custom_container">
                    <div className="grid grid-cols-[30%_50%_30%] gap-2">
                        <div className=" flex flex-col gap-20 pt-[25px] pb-[25px] pl-[25px] pr-[25px]">

                            <div className="flex flex-col gap-4 items-center justify-center">
                                <img src={quality} alt="" />
                                <h4 className="text-[26px] font-bold">Quality Products</h4>
                                <p class="mb-0 text-[20px] font-barlow">Aui dolorem iesum ruia dolor
                                    sit amet, consectetur, adipisci
                                    eius modi incidunt</p>
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <img src={delivery} alt="" />
                                <h4 className="text-[26px] font-bold">Fast Delivery</h4>
                                <p class="mb-0 text-[20px] font-barlow">Aui dolorem iesum ruia dolor
                                    sit amet, consectetur, adipisci
                                    eius modi incidunt</p>
                            </div>


                        </div>
                        <div className="flex flex-col gap-10  items-center justify-center">

                            <div>
                                <img src={basket} alt="" />
                            </div>
                            <button class="mt-[32px] font-barlow bg-lightGreen pt-[14px] pb-[14px] pl-[34px] pr-[34px] text-white text-[16px] uppercase w-[175px]">Shop Now</button>

                        </div>
                        <div className="flex flex-col gap-20 pt-[25px] pb-[25px] pl-[25px] pr-[25px]">
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <img src={onlineorder} alt="" />
                                <h4 className="text-[26px] font-bold">Online Order</h4>
                                <p class="mb-0 text-[20px] font-barlow">Aui dolorem iesum ruia dolor
                                    sit amet, consectetur, adipisci
                                    eius modi incidunt</p>
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <img src={service} alt="" />
                                <h4 className="text-[26px] font-bold">24/7 Service</h4>
                                <p class="mb-0 text-[20px] font-barlow">Aui dolorem iesum ruia dolor
                                    sit amet, consectetur, adipisci
                                    eius modi incidunt</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </>
    )
}
export default FeatureSection