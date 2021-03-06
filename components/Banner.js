import Image from "next/image"
import {useRouter} from "next/dist/client/router"

function Banner({img}) {
  const router = useRouter();
  const search = () => {
    router.push({
      pathname:"/search",
    })
  }
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl-[700px]">
        <Image src={img} layout="fill" objectFit="cover" />
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-lg font-bold">
            Vous ne savez pas où aller ?
            </p>
            <button onClick={search} className="text-[#4BB543] bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Cliquez ici</button> 
        </div>
    </div>
  )
}

export default Banner