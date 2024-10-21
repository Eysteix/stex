import { copyrightSign } from "../assets/icons"
import { socialMedia } from "../constants"
import { footerLinks } from "../constants"

const Footer = () => {
  return (
 <footer className="max-container text-white">
  <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
   <div className="flex flex-col items-start">
     <a href="/" className="text-white text-4xl">
     <span className="text-coral-red">F</span>ly
     </a>
     <p className="mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit
      . Doloribus, delectus expedita minus aliquid iusto voluptatem.
     </p>
     <div className="flex items-center gap-5 mt-8">
      {socialMedia.map((icon)=>(
        <div className=" flex justify-center items-center w-12 h-12 bg-white rounded-full">
          <img src={icon.src} alt={icon.alt} width={24} height={24}/>
        </div>
      ))}
     </div>
   </div>
   <div className="flex flex-1 justify-between lg:gap-10 gap-20  flex-wrap">
{footerLinks.map((section)=>(
    <div className="" >
      <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 ">
        {section.title}
      </h4>
      <ul>
        {section.links.map((link)=>(
          <li className="mt-3 text-white-300  font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}>
            <a >{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
))}

   </div>
  </div>
  <div className="flex justify-between text-white-400 mt-24 max-sm:items-center">
    <div className="flex flex-1 justify-start  items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign}
          alt="copy right sign"
          width={20}
          height={20}
          />
       
            <p>Copyright. All rights reserved.</p>
      
  
    </div>
    <div className="rounded-full m-0">
          <p className="font-montserrat cursor-pointer">
            Terms & Conditions
          </p>
          </div>


  </div>
 </footer>
  )
}

export default Footer
