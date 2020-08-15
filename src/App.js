import React, { useRef, useState, useEffect, useCallback } from "react";
import "./styles.css";

export default function App() {
  const arr = [
    "https://minsknews.by/wp-content/uploads/2020/01/pug_3.jpg",
    "https://kisapes.ru/images/breeds/dogs/mops.jpg",
    "https://www.tapeciarnia.pl/tapety/normalne/tapeta-mops-w-trawie.jpg",
    "https://superminiki.com/files/mops_0.jpg",
    "https://disgustingmen.com/wp-content/uploads/2020/03/the-order-of-the-pug-6.jpg",
    "https://elle.ua/i/publications/1022/560_292/do-togo-kak-tebya-nakonec-pustyat-k-tarelke-nuzhno-so-vsemi-obshchatsya-kak-mops-agamemnon-na-zvaniy-uzhin-hodil-1838-21405.jpg"
  ];
  const slidesContainer = useRef();
  const slidesPaginationContainer = useRef();
  const [slides, setSlides] = useState(null);
  const [slidesPagination, setSlidesPagination] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSlides(() => [...slidesContainer.current.children]);
    setSlidesPagination(() => [...slidesPaginationContainer.current.children]);
  }, [slidesContainer, slidesPaginationContainer]);

  const scrollTo = useCallback(
    (index) => {
      slides[index].scrollIntoView({ behavior: "smooth" });
      setCurrentIndex(index);
    },
    [slides]
  );

  // alert(currentIndex);
  const slideBack = () => {
    if (currentIndex > 0) {
      slides[currentIndex - 1].scrollIntoView({ behavior: "smooth" });

      slidesPagination[currentIndex - 1].scrollIntoView({ behavior: "smooth" });

      setCurrentIndex(() => currentIndex - 1);
    }
  };

  const slideNext = () => {
    if (currentIndex < slides.length - 1) {
      slides[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
      slidesPagination[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
      setCurrentIndex(() => currentIndex + 1);
    }
    // if (currentIndex === 0) {
    //   slidesPagination[4].scrollIntoView({ behavior: "smooth" });
    //   slides[4].scrollIntoView({ behavior: "smooth" });
    //   setCurrentIndex(4);
    // }
  };

  return (
    <div className="Gallary">
      <div className="slider">
        <div ref={slidesContainer} className="slides">
          {arr.map((image, index) => (
            <div className="slide">
              <img className="image" src={image} alt={"мопс"} />
            </div>
          ))}
        </div>

        <div className="PaginationMobile">
          {arr.map((_, index) => (
            <button
              className="paginationMobileControl"
              onClick={scrollTo.bind(this, index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="pagination">
        <button onClick={slideBack} className="paginationButton "></button>
        <div ref={slidesPaginationContainer} className="slides">
          {arr.map((image, index) => (
            <>
              <button
                className="paginationControll"
                onClick={scrollTo.bind(this, index)}
              >
                <img className="image" src={image} alt={"мопс"} />
              </button>
            </>
          ))}
        </div>
        <button onClick={slideNext} className="paginationButton "></button>
      </div>
    </div>
  );
}
