import Image from "next/image"
import FlowerImg from "../../../public/flower.jpg"

const Imagepage = () => {
    return (
        <>
            <div className="relative" style={{height:"90vh"}}>
                <Image src={FlowerImg} fill alt="flower imag" className="border"/>
            </div>
        </>
    )
}

export default Imagepage
