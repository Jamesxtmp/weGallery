import ImageFullPrev from "./ImageFullPrev"
import { RiCloseLine } from "react-icons/ri"

export default function ViewCorousel ( { setPrevImagesIsShow, prevImagesIsShow } ) {
  return (
    <div>
      <div //Cobertura
        className="fixed top-0 right-0 w-full h-[100vh] bg-gray-900 bg-opacity-90"
        onClick={() => setPrevImagesIsShow( [] )}
      ></div>
      <div // Imagen
        className='p-4 fixed top-0 left-0'>
        <ImageFullPrev imagesToView={prevImagesIsShow} />
      </div>
      <div //boton cierre
        className="bg-gray-300 opacity-50 w-10 h-10 rounded-full fixed top-5 right-5 flex text-black text-2xl justify-center items-center text-center "
        onClick={() => setPrevImagesIsShow( [] )}
      >
        <RiCloseLine />
      </div>
    </div>
  )
}
