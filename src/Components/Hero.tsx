/*eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image"

function Hero  ()  {
  return (
    <div className="w-full h-[263px]  flex justify-center mt-8">
      <div className="bg-black h-full sm:w-full md: w-full lg:w-[80%] flex justify-between">
        {/*left side*/}
        <div className="ml-8 sm:mt-4 md:mt-16 text-white">
            <div className="w-[200px]">
                <h1 className="text-3xl font-sans font-bold">Up to 10% off Voucher</h1>

                <button className="text-lg font-bold underline underline-offset-8">Shop now</button>
            </div>
        </div>
        {/*right side*/}
        <div>
            <Image src={"/images/herro.png"} width={340}
             height={200} alt="Heroimage" className="mt-5"></Image>
        </div>
      </div>
    </div>
  )
}

export default Hero
