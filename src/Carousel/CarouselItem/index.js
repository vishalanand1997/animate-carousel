import React, { useEffect, useRef } from "react";
import CarouselStyle from "../styles/Carousel.module.css";

function CarouselItem(props) {
  const { name, bio, index } = props;
  const imageUrl = `https://picsum.photos/40/80?random=${index}`;
  const elementRef = useRef(null);

  const checkOddEven = () => {
    return (index + 1) % 2 === 0 ? "even" : "odd";
  };
  useEffect(() => {
    const containerStyle = CarouselStyle.cardContainer;
    const timer = setTimeout(() => {
      if (checkOddEven() === "even") {
        elementRef.current.className = `slide-down ${containerStyle}`;
      } else {
        elementRef.current.className = `slide-up ${containerStyle}`;
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div ref={elementRef} className={`${CarouselStyle.cardContainer}`}>
      <img
        src={imageUrl}
        alt="profile-image"
        width={60}
        height={60}
        className={CarouselStyle.image}
      />
      <h6 className={CarouselStyle.name}>{name}</h6>
      <p className={CarouselStyle.bio}>{bio}</p>
    </div>
  );
}

export default CarouselItem;
