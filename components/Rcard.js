import { HeartIcon } from "@heroicons/react/outline"
import Image from "next/image"

function Rcard({img,p1,p2,p3,price,date}) {
  const dt = new Date().toLocaleDateString("en-US").toString()
  function dateCompare(d1, d2){
    const date1 = new Date(d1).toLocaleDateString("en-US");
    const date2 = new Date(d2).toLocaleDateString("en-US");


    if(date1 > date2){
        return (new Date(d1).toLocaleDateString("fr-FR"))
    } else if(date1 < date2){
        return "Expirée"
    } else{
        return "Aujourd'hui"
    }
}



  return (
    <div className="md:flex  py-7 px-2 border-b  transition first:border-t">
      <div className="relative  h-36 w-60 md:h-60 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className=" ">  
          <p className="text-lg font-semibold pb-2 lg:text-2xl text-right">{price}</p>
        </div>
        
        <p className="text-sm pt-2 text-gray-500 flex-grow">{p1}</p>
        <p className="text-sm pt-2 text-gray-500 flex-grow">{p2}</p>
        <p className="text-sm pt-2 text-gray-500 flex-grow">{p3}</p>
        <div className="flex justify-between items-end pt-5">
          <div></div>
          <p className="flex text-lg font-semibold pb-2 lg:text-2xl">
          Date: {dateCompare(date, dt)}
          </p>

        </div>
      </div>
    </div>
  )
}

export default Rcard