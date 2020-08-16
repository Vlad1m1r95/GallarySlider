import { useRef, useState, useEffect, useCallback } from "react";

const useGallary = (images) => {
  const slidesContainer = useRef();
  const [slides, setSlides] = useState(null);

  const slidesPaginationContainer = useRef();
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

  const slideBack = () => {
    if (currentIndex > 0) {
      setTimeout(() => {
        slides[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
      }, 220);

      slidesPagination[currentIndex - 1].scrollIntoView({ behavior: "smooth" });

      setCurrentIndex(() => currentIndex - 1);
    }
  };

  const slideNext = () => {
    if (currentIndex < slides.length - 1) {
      setTimeout(() => {
        slides[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
      }, 220);
      slidesPagination[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
      setCurrentIndex(currentIndex + 1);
    }
  };

  return {
    gallaryContainers: { slidesContainer, slidesPaginationContainer },

    gallaryHandlers: { scrollTo, slideBack, slideNext }
  };
};

export { useGallary };
