import InputHolder from './InputHolder'
import { options } from '../../utils/options'

const InputForm = () => {
  return (
    <div className='flex flex-col py-1  relative w-[145%] z-10 bg-white shadow-sp-input rounded'>
      <p className="ml-5 text-base text-[#4F4F4F] mt-5">For Current rent estimate, please provide the following :</p>
      <div className="flex mb-5">

        <div className="grid grid-cols-11 grid-row-2 gap-6 mt-2 ml-10 w-[90%] ">

          <div className='col-span-7'>
            <InputHolder inputName={"Address *"} img={"/Images/location.png"} options={options.address} />
          </div>

          <div className='col-span-2 '>
            <InputHolder inputName={"Unit"} img={"/Images/empty.png"} options={options.unit} />
          </div>

          <div className='col-start-1 col-end-4'>
            <InputHolder inputName={"Property Type "} img={"/Images/property.png"} options={options.propertyType} />
          </div>

          <div className='col-span-2'>
            <InputHolder inputName={"SQFT"} img={"/Images/sqft.png"} options={options.sqft} />
          </div>

          <div className='col-span-2'>
            <InputHolder inputName={"Beds"} img={"/Images/beds.png"} options={options.unit} />
          </div>

          <div className='ml-2 col-span-2'>
            <InputHolder inputName={"Bath"} img={"/Images/bath.png"} options={options.baths} />
          </div>

          <button className=" self-end col-span-2  bg-sp-orange px-7 py-1 h-[35px] rounded-sm text-white ml-2">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default InputForm
