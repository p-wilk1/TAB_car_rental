import CarouselCSS from "./Carousel.module.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "/src/images.jsx";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div className={CarouselCSS.carousel}>
      <motion.div
        ref={carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={CarouselCSS.innerCarousel}
      >
        {images.map((img) => {
          return (
            <motion.div key={img} className={CarouselCSS.carouselItem}>
              <img src={img} draggable={false} alt=""></img>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
