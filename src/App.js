import React from "react";
import { useGallary } from "./useGallary";

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

  const {
    gallaryContainers: { slidesContainer, slidesPaginationContainer },
    gallaryHandlers: { scrollTo, slideBack, slideNext }
  } = useGallary(arr);

  return (
    <div className="Gallary">
      <div className="Gallary__slider">
        <div ref={slidesContainer} className="Gallary__slides">
          {arr.map((image, index) => (
            <div className="Gallary__slide">
              <img className="Gallary__image" src={image} alt={"мопс"} />
            </div>
          ))}
        </div>

        <div className="Gallary__paginationMobile">
          {arr.map((_, index) => (
            <button
              className="Gallary__paginationMobileControl"
              onClick={scrollTo.bind(this, index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="Gallary__pagination">
        <button
          onClick={slideBack}
          className="Gallary__paginationButton"
        ></button>
        <div ref={slidesPaginationContainer} className="Gallary__slides">
          {arr.map((image, index) => (
            <>
              <button
                className="Gallary__paginationControll"
                onClick={scrollTo.bind(this, index)}
              >
                <img
                  className="[ Gallary__image ] 
                  [ Gallary__imagePagination  ]"
                  src={image}
                  alt={"мопс"}
                />
              </button>
            </>
          ))}
        </div>
        <button
          onClick={slideNext}
          className="Gallary__paginationButton"
        ></button>
      </div>
    </div>
  );
}
