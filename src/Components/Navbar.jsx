import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import log from "/images/logo.png"
import { faBars, faCartShopping, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const mobilMenuHander = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <>

            <div className="custom-container">


                <nav className="flex justify-between items-center pt-[10px] pb-[65px]">
                    <div>
                        <img src={log} alt="" />
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex gap-6">
                            <li>Home</li>
                            <li>About</li>
                            <li>Shop</li>
                            <li>Pages</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex gap-4">
                            <li className="bg-white h-[42px] w-[42px] rounded-full flex items-center justify-center"><FontAwesomeIcon icon={faMagnifyingGlass} className="text-primary" /></li>
                            <li className="bg-white h-[42px] w-[42px] rounded-full flex items-center justify-center"><FontAwesomeIcon icon={faUser} className="text-primary" /></li>
                            <li className=" bg-white h-[42px] w-[42px] rounded-full flex items-center justify-center"><FontAwesomeIcon icon={faHeart} className="text-primary" /></li>
                            <li className="bg-white h-[42px] w-[42px] rounded-full flex items-center justify-center"><FontAwesomeIcon icon={faCartShopping} className="text-primary" /></li>
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
        </>
    )
}
export default Navbar