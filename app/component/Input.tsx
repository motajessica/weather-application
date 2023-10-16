"use client"
import { BiSearchAlt } from "react-icons/bi"

const Input = () => {
  return (
    <form className="flex items-center md:w-2/4 w-full order-2"> 
      <input
      type="text"
      placeholder="Search City"
      className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
      />
      <div className="ml-[-25px] cursor-pointer text-white">
        <BiSearchAlt />
      </div>
    </form>
  )
}

export default Input