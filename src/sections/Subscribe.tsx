import Button from "../components/button"
const Subscribe = () => {
  return (
   <section className="max-container  flex justify-between items-center max-lg:flex-col gap-10  " id="contact-us">

      <h3 className="capitalize font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md ">sign up for <span className="text-coral-red">updates </span>
      & newsletter</h3>
      <div className="  lg:max-w-[40%] w-full flex items-center mx-sm:flex-col gap-5 p-1 sm:border  dark:border-slate-900 border-slate-300 rounded-full">
        <input type="text"
        placeholder="subscribe@fly.com"
        className="input bg-transparent max-sm:justify-end  items-center max-sm:w-3/4 dark:text-white" />
        <div className="flex  mb-3 mr-3 lg:mr-0">
          <Button label="Sign Up" />
        </div>
      </div>
   </section>
  )
}

export default Subscribe