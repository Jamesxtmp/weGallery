import Head from "./components/head/Head";
import TimeLine from "./components/timeline/TimeLine";


export default function App () {
  return (
    <div className="px-5 lg:flex lg:flex-col lg:items-center lg:w-full">
      <Head />
      <TimeLine />
    </div>
  )
}
