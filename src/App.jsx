import { useState } from "react";
import Head from "./components/head/Head";
import TimeLine from "./components/timeline/TimeLine";

import { RiCloseLine } from "react-icons/ri"

import ImageFullPrev from "./components/emergents/ImageFullPrev"

export default function App () {
  const [prevImagesIsShow, setPrevImagesIsShow] = useState( [] )


  return (
    <div className="px-5 flex flex-col lg:items-center w-full">
      <Head />
      <div className="lg:max-w-[70%]" >
        <TimeLine setterImages={setPrevImagesIsShow} />
      </div>

      {
        // Muestra imagen si las hay
        prevImagesIsShow.length > 0 &&
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
      }
    </div>
  )
}
