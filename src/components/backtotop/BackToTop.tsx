import styles from "styles/components/BackToTop/BackToTop.module.scss";
import classNames from "classnames/bind";
import { BacktoTop } from "../Icons";
import { useEffect } from "react";
import * as React from "react";

const cx = classNames.bind(styles);

const BackToTop: React.FC = () => {
  const [showToTop, setShowToTop] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY >= 200) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };

    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);
  return showToTop ? (
    <>
      <div className={cx("wrapper")} onClick={scrollToTop}>
        <BacktoTop className={cx("icon")} />
      </div>
    </>
  ) : (
    ""
  );
};

export default BackToTop;
