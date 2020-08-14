import React, { useRef, useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const slidesContainer = useRef();
  const [slides, setSlides] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSlides(() => [...slidesContainer.current.children]);
  }, [slidesContainer]);

  const scrollTo = (index) => {
    slides[index].scrollIntoView({ behavior: "smooth" });
    setCurrentIndex(index);
  };

  const slideBack = () => {
    if (currentIndex > 0) {
      slides[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
      setCurrentIndex(() => currentIndex - 1);
    }
  };

  const slideNext = () => {
    if (currentIndex < slides.length - 1) {
      slides[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
      setCurrentIndex(() => currentIndex + 1);
    }
  };

  return (
    <>
      <div className="slider">
        <div ref={slidesContainer} className="slides">
          {arr.map((_, index) => (
            <div id={`slide-${index}`}>{index + 1}</div>
          ))}
        </div>
      </div>

      <div className="pagination">
        {arr.map((_, index) => (
          <>
            {index === 0 && (
              <button
                onClick={slideBack}
                className="paginationButton "
              ></button>
            )}
            <button
              className="paginationControll"
              onClick={scrollTo.bind(this, index)}
            ></button>

            {index === arr.length - 1 && (
              <button
                onClick={slideNext}
                className="paginationButton "
              ></button>
            )}
          </>
        ))}
      </div>
    </>
  );
}
