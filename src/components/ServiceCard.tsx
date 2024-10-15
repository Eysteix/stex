
const ServiceCard = ({imgURL,label,subtext}:any) => {
  return (
    <div className="group  hover:ease-linear dark:hover:bg-[#0c1830]  hover:bg-coral-red hover:scale-105 transition-all  p-4 mt-4   shadow-md dark:shadow-gray-900 shadow-gray-300 rounded-lg px-10 py-16">
         <div className=" icon bg-coral-red w-[32px] h-[32px] rounded-full p-2 group-hover:bg-white">
            <img src={imgURL} alt={label} width={50} height={50}  className="group-hover:invert "/>
         </div>
         <h3 className="dark:group-hover:text-coral-red group-hover:text-white text-2xl font-bold font-palanquin mt-4">{label}</h3>
         <p className="font-montserrat group-hover:text-gray-300  mt-4 text-slate-gray  break-words text-lg leading-normal">{subtext}</p>
    </div>
  )
}

export default ServiceCard