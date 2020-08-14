import React, { useRef, useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const slidesContainer = useRef();
  const [slides, setSlides] = useState(null);

  useEffect(() => {
    setSlides(() => [...slidesContainer.current.children]);
  }, [slidesContainer]);

  const scrollTo = (index) => {
    slides[index].scrollIntoView({ behavior: "smooth" });
  };

  const slideBack = (index) => {
    alert(index);
    if (index > 0) {
      slides[index - 1].scrollIntoView({ behavior: "smooth" });
    }
  };

  const slideNext = (index) => {
    if (index < slides.length - 1) {
      slides[index + 1].scrollIntoView({ behavior: "smooth" });
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
                onClick={slideBack.bind(this, index)}
                className="paginationButton "
              ></button>
            )}
            <button
              className="paginationControll"
              onClick={scrollTo.bind(this, index)}
            ></button>

            {index === arr.length - 1 && (
              <button
                onClick={slideNext.bind(this, index)}
                className="paginationButton "
              ></button>
            )}
          </>
        ))}
      </div>
    </>
  );
}
