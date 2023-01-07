import classNames from "classnames/bind";
import styles from "styles/components/CoinPolicy/CoinPolicy.module.scss";
import Link from "next/link";

const cx = classNames.bind(styles);

interface Props {
  data?: any;
}

const CoinPolicy: React.FC<Props> = ({ data }) => {
  return (
    <div className={cx("wrapper")}>
      <img src="" alt="" />
      <div className={cx("trade-coin-content")}>
        <span>{data.step1}</span>
        <span>{data.step2}</span>
        <span>{data.step3}</span>
        <span>{data.step4}</span>
        <span>{data.step5}</span>
        <span>{data.step6}</span>
        <span>{data.notice}</span>
      </div>
    </div>
  );
};

export default CoinPolicy;
