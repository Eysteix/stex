import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
   <section id="home" className="w-full  flex  xl:flex-row flex-col justify-center gap-10   max-container min-h-screen">
        <div className="relative xl:w-2/5 flex justify-center items-start w-full max-xl:padding-x  pt-28  flex-col p-3">
        <p className="font-montserrat text-coral-red text-xl">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 dark:bg-slate-950 dark:max-lg:bg-transparent">The New Arrival</span> 
          <br />
          <span className="text-coral-red inline-block mt-3">Fly </span>
          
          Shoes</h1>
          <p className="font-montserrat text-slate-gray  text-lg leading-8 mt-6 mb-14">Discover New shoe trends for the 21st century to   give you a stylish look</p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item)=>(
            <div className="" key={item.label}>
                   <p className="text-4xl font-palanquin font-bold">{item.value}</p>
                   <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
            </div>
          ))
          }
        </div>
        </div>


        <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className="object-contain relative z-10" />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%]">
            {shoes.map((shoe)=>(
             <div className="" key={shoe.thumbnail}>
              <ShoeCard  imgURL={shoe} 
              changeBigShoeImage={()=>setbigShoeImg(shoe.bigShoe)}
              bigShoeImg={bigShoeImg} />
             </div>
            ))}
          </div>
        </div>
   </section>
  )
}
   
export default Hero