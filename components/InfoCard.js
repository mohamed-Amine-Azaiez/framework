import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import {useRouter} from "next/dist/client/router"

function InfoCard({img,location,title,description,start,price,star,id,date}) {
  const router = useRouter();

  const moreinfo = () => {
    router.push({
      pathname:"/info",
      query:{
        id:id,
        title:title,
        location:location,
      },
    })
  }
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
    <div onClick={moreinfo} className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="text-sm pt-2 text-gray-500 flex-grow">{description}</p>
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

export default InfoCard