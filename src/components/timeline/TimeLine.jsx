import { timeline } from '../../data/days.json'
import urlToPrevImage from '../../functions/urlToPrevImage'

export default function TimeLine () {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {timeline.map( ( { date, title, description, images }, i ) => {
        return (
          <li key={i} className="mb-5 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
            <div className="flex space-x-2 mt-2">
              {images.map( ( link, j ) => {
                return (
                  <img key={j} src={urlToPrevImage( link )} alt="Picsum" className="rounded-lg" />
                )
              } )}
            </div>
          </li>
        )
      } )}
    </ol>
  )
}
