import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
         <div className="flex-1">
          <img src={offer} alt="offer_img" width={773} height={687}
          className="object-contain  w-full" />
         </div>
         <div className="flex flex-1 flex-col">

<h2 className="mt-10 font-palanquin capitalize text-4xl font-bold ">
         <span className="text-coral-red inline-block mt-3 m-2">Special </span>
         Offer</h2>
         <p className="info-text mt-4 lg:max-w-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.</p>
         <p className="info-text t mt-6 lg:max-w-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pa. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nam.</p>
       <div className="mt-11 inline-flex gap-3">
       <Button  label="Shop Now" iconURL={arrowRight} />
       <Button  label="View Details" bg="text-white  border-2 border-coral-red text-black dark:text-white" />

       </div>
       </div>
       
     
    </section>
  )
}

export default SpecialOffer
