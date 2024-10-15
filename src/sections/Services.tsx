import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9 '>
       <div className="gap-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols 1">
        {services.map((item)=>(
          <ServiceCard key={item.label} {...item}/>
        )
        )}
       </div>

    </section>
  )
}

export default Services