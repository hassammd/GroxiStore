import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import log from "/images/logo.png"
import { faBars, faCartShopping, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const mobilMenuHander = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <>


            <section className="absolute left-[50%] z-20 translate-x-[-50%] w-full">

                <div className="custom_container">


                    <nav className="flex justify-between items-center pt-[10px] pb-[65px]">
                        <div>
                            <img src={log} alt="" />
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex gap-6">
                                <Link to={"/"}><li className="text-[20px] font-jost hover:text-lightGreen cursor-pointer transition ease-out duration-300">Home</li>
                                </Link>
                                <Link to={"about"}><li className="text-[20px] font-jost hover:text-lightGreen cursor-pointer transition ease-out duration-300 " > About</li></Link>


                                <li className="text-[20px] font-jost hover:text-lightGreen cursor-pointer transition ease-out duration-300 " >Blog</li>

                                <Link to={"contact"}>

                                    <li className="text-[20px] font-jost hover:text-lightGreen cursor-pointer transition ease-out duration-300 " >Contact</li>
                                </Link>
                            </ul>
                        </div>

                        <div className="hidden md:block">
                            <ul className="flex gap-4">


                                <li className="bg-white  hover:bg-green transition ease-in-out duration-500 hover:cursor-pointer group h-[42px] w-[42px] rounded-full flex items-center justify-center"> <FontAwesomeIcon icon={faMagnifyingGlass} className="text-primary  group-hover:text-white transition-all duration-700" /> </li>
                                <Link to={"checkout"}>

                                    <li className="bg-white  hover:bg-green transition-all duration-500 hover:cursor-pointer group h-[42px] w-[42px] rounded-full flex items-center justify-center"><FontAwesomeIcon icon={faUser} className="text-primary group-hover:text-white transition-all duration-700" /></li>
                                </Link>
                                <li className=" bg-white  hover:bg-green transition-all duration-500 hover:cursor-pointer group h-[42px] w-[42px] rounded-full flex items-center justify-center"><FontAwesomeIcon icon={faHeart} className="text-primary group-hover:text-white transition-all duration-700" /></li>
                                <Link to="/cart">    <li className="bg-white  hover:bg-green transition-all duration-500 hover:cursor-pointer group h-[42px] w-[42px] rounded-full flex items-center justify-center"><FontAwesomeIcon icon={faCartShopping} className="text-primary group-hover:text-white transition-all duration-700" /></li>
                                </Link>

                            </ul>
                        </div>
                        <div className="block md:hidden" onClick={mobilMenuHander}>
                            <span><FontAwesomeIcon icon={faBars} /></span>
                        </div>

                        {/* mobile menu */}
                        {
                            openMenu ?
                                <div className="bg-white fixed inset-0 p-3 -translate-x-120">


                                    <div id="mobile_menu " className=" md:hidden  h-[24px] ">
                                        <ul className="flex flex-col gap-6 ">
                                            <li>Home</li>
                                            <li>Shop</li>
                                            <li>Pages</li>
                                            <li>Blog</li>
                                            <li>Contact</li>
                                        </ul>

                                    </div><div className="block md:hidden absolute top-[100] right-[120px]" onClick={mobilMenuHander}>
                                        <span><FontAwesomeIcon icon={faXmark} /></span>
                                    </div>
                                </div> : null
                        }

                    </nav >


                </div>
            </section>
        </>
    )
}
export default Navbar