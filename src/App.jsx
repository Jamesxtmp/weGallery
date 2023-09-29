// import { Outlet } from "react-router-dom";

import Head from "./components/head/Head";
import TimeLine from "./components/timeline/TimeLine";
import ViewCorousel from "./components/emergents/ViewCorousel";
import { useState } from "react";
import { Outlet } from "react-router-dom";


export default function App () {
  const [prevImagesIsShow, setPrevImagesIsShow] = useState( [] )


  return (
    <div className="px-5 flex flex-col lg:items-center w-full">


      <Head />
      <div className="lg:max-w-[70%]" >
        <TimeLine setterImages={setPrevImagesIsShow} />
      </div>
      <Outlet
        prevImagesIsShow={prevImagesIsShow}
        setPrevImagesIsShow={setPrevImagesIsShow}
      />

      {
        // Muestra imagen si las hay
        prevImagesIsShow.length > 0 &&
        <ViewCorousel
          prevImagesIsShow={prevImagesIsShow}
          setPrevImagesIsShow={setPrevImagesIsShow}
        />
      }
    </div>
  )
}
