import React from "react";
import AliceCarousel from "react-alice-carousel";
import CarouselItem from "./CarouselItem";
import CarouselStyle from "./styles/Carousel.module.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

const list = [
  {
    name: "Marvin McKinney",
    bio: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely.  ",
  },
  {
    name: "Cody Fisher",
    bio: " As a Freelancer, managing invoices and chasing payments was a constant headache. Now, with automated and secure payment I am getting paid on time, every time.",
  },
  {
    name: "Fisher",
    bio: " As a Freelancer, managing invoices and chasing payments was a constant headache. Now, with automated and secure payment I am getting paid on time, every time.",
  },
  {
    name: "Jacob Jones",
    bio: "As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.  ",
  },
  {
    name: "Theresa Webb",
    bio: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
  },
  {
    name: "Ronald Richards",
    bio: "We needed a payment gateway that could handle our diverse customer base. Swift Revel offers a wide range of payment options, making it easy for our clients to pay.  ",
  },
];
function Carousel() {
  const items = list.map((item, index) => (
    <CarouselItem {...item} index={index} />
  ));

  return (
    <div className={CarouselStyle.container}>
      <header>
        <h1 className={CarouselStyle.heading}>What User says</h1>
        <p className={CarouselStyle.subHeading}>
          Testimonials that speak louder than words! Customer stories that light
          up our day.
        </p>
      </header>
      <main className={CarouselStyle.carouselItemContainer}>
        <AliceCarousel
          autoPlay
          infinite
          mouseTracking
          items={items}
          paddingLeft={50}
          paddingRight={50}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          autoPlayInterval={1000}
          animationDuration={1000}
        />
      </main>
    </div>
  );
}

export default Carousel;
