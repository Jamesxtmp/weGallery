import { Carousel } from "@material-tailwind/react";

export default function ImageFullPrev ( { imagesToView } ) {
  return (
    <Carousel
      className="flex items-center"
      navigation={( { setActiveIndex, activeIndex, length } ) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array( length ).fill( "" ).map( ( _, i ) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              onClick={() => setActiveIndex( i )}
            />
          ) )}
        </div>
      )}
    >
      {
        imagesToView.map( ( link, i ) => {
          return (
            <img
              key={i}
              src={link}
              alt="image 1"
              className="h-full w-full object-cover rounded-lg"
            />
          )
        } )
      }
    </Carousel>
  );
}
