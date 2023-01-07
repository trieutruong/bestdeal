import classNames from "classnames/bind";
import styles from "styles/components/RankMember/RankMember.module.scss";
import Link from "next/link";

const cx = classNames.bind(styles);

interface Props {
  data?: any;
}

const RankMemberPolicy: React.FC<Props> = ({ data }) => {
  return (
    data && (
      <div className={cx("rank-member-policy-item")}>
        <img src="" alt="" />
        <h5>{data.title}</h5>
        <p>{data.description}</p>
      </div>
    )
  );
};

export default RankMemberPolicy;
