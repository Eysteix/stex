
import { shoe8 } from "../assets/images"
import Button from "../components/button"

const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 max-container">
 <div className="flex flex-1 flex-col">

 <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold ">
          <span className="dark:bg-inherit xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span> 
          <br />
          <span className="text-coral-red inline-block mt-3 m-2">Super Quality </span>
          
          Shoes</h2>
          <p className="info-text mt-4 lg:max-w-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id.</p>
          <p className="info-text t mt-6 lg:max-w-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pa.</p>
        <div className="mt-11">
        <Button  label="View Details" />
        </div>

        
      

 </div>

 <div className="flex flex-1 justify-center-ites-center">
  <img src={shoe8} alt="SuperQuality Shoe"  width={570} height={522} className="object-contain"/>
 </div>

    </section>
  )
}

export default SuperQuality