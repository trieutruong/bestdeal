import React from "react";
import styles from "styles/Introduce.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  data?: any;
}

const IntroduceContent: React.FC<Props> = ({ data }) => {
  return (
    <>
      <img src={data.img} alt="" />
      <div className={cx("content")}>{data.description}</div>
    </>
  );
};

export default IntroduceContent;
