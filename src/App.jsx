import { useState } from "react";
import Head from "./components/head/Head";
import TimeLine from "./components/timeline/TimeLine";

import ImageFullPrev from "./components/emergents/ImageFullPrev"

export default function App () {
  const [prevImagesIsShow, setPrevImagesIsShow] = useState( [] )


  return (
    <div className="px-5 flex flex-col lg:items-center w-full">
      <Head />
      <div className="lg:max-w-[70%]" >
        <TimeLine setterImages={setPrevImagesIsShow} />
      </div>
      {prevImagesIsShow.length > 0 &&
        <div>
          <div
            className="fixed top-0 right-0 w-full h-[100vh] bg-gray-900 bg-opacity-90"
            onClick={() => setPrevImagesIsShow( [] )}
          ></div>
          <div className='p-4 fixed top-0 left-0'>
            <ImageFullPrev imagesToView={prevImagesIsShow} />
          </div>
        </div>
      }
    </div>
  )
}
