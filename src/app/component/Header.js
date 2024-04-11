"use client"
import { useState } from "react";
import Menu from "./Menu";
import Wrapper from "./Wrapper";
import Link from "next/link";
const Header =() =>{
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);

    return(
        <header
          className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
        >
        
         <Wrapper className="h-[60px]  flex justify-between items-center">
             <Link href="/">
             <img src="/logo.svg" className=" w-[40px] md:w-[60px]" alt="" />
             </Link>
             <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}></Menu>
         </Wrapper>
        </header>
         
          
        
    )
}

export default Header;