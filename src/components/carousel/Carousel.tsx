import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classNames from "classnames/bind";
import styles from "styles/components/Carousel/Carousel.module.scss";

import NextButton from "../button/NextButton";
import PrevButton from "../button/PrevButton";
import Item from "../Item/Item";

const cx = classNames.bind(styles);

interface Props {
  data?: any;
  className?: any;
}

const Carousel: React.FC<Props> = ({ data, className }) => {
  // console.log(data);

  const settings: any = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    styles: {
      backgroundColor: "transparent",
    },
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // nextArrow: 0,
          // prevArrow: 0,
        },
      },
    ],
  };

  return (
    <>
      <Slider className={cx("carousel-list") + " row sm-gutter"} {...settings}>
        {data &&
          data.map((sliderItem: any, index: number) => (
            <Item
              key={index}
              data={sliderItem}
              className={cx("carousel-item")}
            />
          ))}
      </Slider>
    </>
  );
};

export default Carousel;
