import { hamburger, shieldTick } from "../assets/icons";
import { navLinks } from '../constants/index';
import { useState } from "react";

const Nav =  () => {
 const [theme,setTheme] = useState("light");
 document.body.setAttribute("class",theme);


    return(
      <header className="padding-x
      py-8 sticky top-0 left-0  bg-white z-[200]   w-full  dark:bg-slate-950">
        <nav className="flex justify-between items-center max-container" >
            <a href="/" className="flex justify-center gap-x-20 font-palanquin ">
            <h1 className="font-bold leading-4 text-[58px]"><span className="text-coral-red">F</span>ly</h1>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"> 
              {
              navLinks.map((item)=>(
                   <li  key={item.label}><a href={item.href} >{item.label}</a></li>
              ))
            }
            </ul>
            <div className="hidden max-lg:block">
              <img src={hamburger} alt={hamburger} width={25} height={25} />
            </div>
             {
                  theme=="light"?<div className="w-10 h-10  rounded-lg  right-0 bg-coral-red justify-center flex p-2"  onClick={()=>setTheme("dark")} >
                  <img src={shieldTick} alt={"togglebtn "} />
                </div>:<div className="w-10 h-10  rounded-lg  right-0 bg-coral-red justify-center flex p-2"  onClick={()=>setTheme("light")} >
              <img src={shieldTick} alt={"togglebtn "} />
            </div>


             }
            
     
        </nav>
   
       
     
          
      </header>
    )
  };

  export default Nav;