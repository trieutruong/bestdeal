import classNames from "classnames/bind";
import styles from "styles/components/RankMember/RankMember.module.scss";
import Link from "next/link";
import RankMemberPolicy from "./RankMemberPolicy";
import Image from "next/image";

const cx = classNames.bind(styles);

interface Props {
  data?: any;
}

const RankMember: React.FC<Props> = ({ data }) => {
  return (
    data && (
      <div className={cx("rank-member-wrapper")}>
        <div className={cx("rank-member-policy-wrapper")}>
          {data.rankMemberPolicy &&
            data.rankMemberPolicy.map((rankItem: any, index: number) => (
              <RankMemberPolicy key={index} data={rankItem} />
            ))}
        </div>

        <div className={cx("rank-member-benefits-wrapper")}>
          <table className={cx("rank-member-benefits-table")}>
            <thead className={cx("rank-member-benefits-header")}>
              <tr>
                {data.rankMemberBenefitsTitle ? (
                  <>
                    <th>{data.rankMemberBenefitsTitle.title}</th>
                    <th>{data.rankMemberBenefitsTitle.silver}</th>
                    <th>{data.rankMemberBenefitsTitle.gold}</th>
                    <th>{data.rankMemberBenefitsTitle.diamond}</th>
                  </>
                ) : (
                  ""
                )}
              </tr>
            </thead>
            <tbody>
              {data.rankMemberBenefits &&
                data.rankMemberBenefits.map(
                  (rankmemberbenefit: any, index: number) => {
                    console.log(typeof rankmemberbenefit.silver);
                  }
                )}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default RankMember;
