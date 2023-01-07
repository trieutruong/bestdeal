import classNames from "classnames/bind";
import styles from "styles/components/LoyalCustomer/LoyalCustomer.module.scss";
import Link from "next/link";

const cx = classNames.bind(styles);

interface Props {
  data?: any;
}

const LoyalCustomer: React.FC<Props> = ({ data }): React.ReactElement => {
  return (
    <div className={cx("wrapper")}>
      <img src="" alt="" />
      <div className={cx("vip-member-content")}>
        <p className={cx("description")}>{data.content}</p>
      </div>
      <div className={cx("vip-member-content")}>
        <h3>{data.programRuleTitle}</h3>
        <p className={cx("description")}>{data.programRuleDescription}</p>
      </div>
      <div className={cx("vip-member-content")}>
        <h3>{data.subjectApplicationTitle}</h3>
        <p className={cx("description")}>
          {data.subjectApplicationDescription}
        </p>
      </div>
      <div className={cx("vip-member-content")}>
        <p className={cx("description")}>{data.appreciate}</p>
      </div>
    </div>
  );
};

export default LoyalCustomer;
