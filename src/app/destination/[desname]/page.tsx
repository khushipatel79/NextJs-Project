import Link from "next/link";

const DestinationDetails = async({params}) => {
   const paramsData = await params;
   console.log(paramsData);
    
  return (
    <div className="bg-white flex flex-col gap-5 items-center justify-center p-5">
       <h2 className="text-3xl fount-bold"> hello {paramsData.desname}</h2>
       <Link href={"/destination"} className="bg-gray-300 rounded p-5 hover:bg-gray-500">Back</Link>
    </div>
  )
}

export default DestinationDetails
