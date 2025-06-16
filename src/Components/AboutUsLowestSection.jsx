import about_us_lowest_img from "/images/about-us-lowest-img.png"
const AboutUsLowestSection = () => {
    return (

        <>

            <section className="pt-[110px] pb-[57px]">
                <div className="custom_container">
                    <div className="flex gap-[30px] relative">
                        <div className="w-[50%] ">
                            <img src={about_us_lowest_img} alt="" className="absolute bottom-[-60px] left-[-250px]" />
                        </div>
                        <div className="pt-[120px] pl-[42px] w-[50%] flex items-center flex-col justify-center">
                            <h2 class="text-[28px] lg:text-[45px] lg:text-left font-semibold text-center font-jost leading-10 mb-[10px]">We Give The Lowest
                                Price on Grocery Items</h2>
                            <p class="text-[22px] lg:text-left md:leading-[32px]  md:font-[38px] lg:font-[45px]  text-center text-darkGray font-barlow leading-[28px] mb-[20px]">Quis autem vel eum iure reprehenderit aui in ea voluptae velit esse quam nihil molestiae consequatur, vel illum rui dolorem eum fugiat quo voluptas excepteur deserunt veniam adipisicing do adipisicing adipisicing proident esse aud irure commodo mollit voluptate irure alorem consequat ullamco do laboris.</p>
                            <p class="text-center lg:text-left md:leading-[32px] text-[22px] text-darkGray font-barlow leading-[28px]">Quis autem vel eum iure reprehenderit aui in ea voluptae velit esse quam nihil molestiae consequatur, vel illum rui dolorem eum fugiat quo voluptas excepteur deserunt veniam adipisicing do adipisicing adipisicing proident esse aud irure commodo mollit voluptate irure alorem consequat ullamco do laboris.</p>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}

export default AboutUsLowestSection