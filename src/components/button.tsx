

const button = (props:any) => {
  return (
   <button className="font-montserrat mt-3 flex space-x-3 items-center justify-between  px-4 py-2 font-semibold tracking-wide text-white bg-orange-600 rounded-full ">
    <span>{props.label}</span>
    {
      props.iconURL &&
    <img src={props.iconURL} alt={props.label} width={20} height={20} />
}
   </button>
  )
}

export default button
