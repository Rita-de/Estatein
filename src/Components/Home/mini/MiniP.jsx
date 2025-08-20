import  'react'
import {  Bath, BedDouble, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'



const MiniP = () => {

  return (
        
         
    <div className="flex flex-col w-full md:w-auto">
          
                  {/* Card 3 */}
          <div className="w-full max-w-xs bg-transparent border border-[#262626] rounded-xl p-4 flex flex-col justify-between  mx-auto 
          hover:scale-105 transition-transform duration-300 shadow-sm shadow-[#262626]">
            <span className="w-full h-40 sm:h-49 bg-[url(/home/homebg3.png)] bg-cover bg-center bg-no-repeat rounded-lg"></span>
            <h2 className="text-lg sm:text-xl font-semibold mt-1.5">
             Rustic Retreat Cottage
            </h2>
            <p className="text-xs mb-3 mt-1.5">
          An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More
          </p>
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 bg-[#2226] px-2 py-1 rounded-lg border border-[#333]">
                <BedDouble width={20} />
                <p className="text-xs">3-Bedroom</p>
              </span>
              <span className="flex items-center gap-1.5 bg-[#2226] px-2 py-1 rounded-lg border border-[#333]">
                <Bath width={20} />
                <p className="text-xs">3-Bathroom</p>
              </span>
              <span className="flex items-center gap-1.5 bg-[#2226] px-2 py-1 rounded-lg border border-[#333]">
                <Building2 width={20} />
                <p className="text-xs">Villa</p>
              </span>
            </div>
            <span className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pt-2 xl:gap-4 2xl:gap-5 flex-wrap">
              <span className="flex flex-col">
                <h5 className="text-xs text-[#999999]">Price</h5>
                <p className="text-sm">$550,000</p>
              </span>
              
              <button 
              
              className="bg-[#703BF7] p-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-md whitespace-nowrap mt-2 sm:mt-0"
              >
                <Link to="/Dprop">View Properties Detaila</Link>
              </button>
             
            </span>
          </div>
        </div>

  )
}

export default MiniP