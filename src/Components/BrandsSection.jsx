import brandlogo1 from '/images/news-logo1.png'
import brandlogo2 from '/images/news-logo2.png'
import brandlogo3 from '/images/news-logo3.png'
import brandlogo4 from '/images/news-logo4.png'
const BrandSection = () => {
    return (
        <>

            <section className='md:pb-[100px]'>

                <div className="custom_container">

                    <div>
                        <ul className='flex gap-[30px] justify-end items-center'>
                            <li className='opacity-20 hover:opacity-100 transition ease-in-out duration-300'><img src={brandlogo1} alt="" /></li>
                            <li className='opacity-20 hover:opacity-100 transition ease-in-out duration-300'><img src={brandlogo2} alt="" /></li>
                            <li className='opacity-20 hover:opacity-100 transition ease-in-out duration-300'><img src={brandlogo3} alt="" /></li>
                            <li className='opacity-20 hover:opacity-100 transition ease-in-out duration-300'><img src={brandlogo4} alt="" /></li>
                        </ul>
                    </div>
                </div>

            </section>

        </>
    )
}
export default BrandSection