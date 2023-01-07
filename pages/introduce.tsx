import classNames from "classnames/bind";
import Link from "next/link";
import React from "react";
import styles from "styles/Introduce.module.scss";
import BreadCrumb from "../src/components/breadcrumb/breadcrumb";
import IntroduceContent from "../src/components/introducecontent/introducecontent";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoyalCustomer from "../src/components/loyalcustomer/LoyalCustomer";
import CoinPolicy from "../src/components/coinpolicy/CoinPolicy";
import RankMember from "../src/components/rankmember/RankMember";

const cx = classNames.bind(styles);

const tabs = [
  {
    title: "Giới thiệu BestDeal",
    englishtitle: "aboutus",
    link: "thong-tin/gioi-thieu",
  },
  {
    title: "Danh sách cửa hàng",
    englishtitle: "store",
    link: "thong-tin/cua-hang",
  },
  {
    title: "Khách hàng thân thiết",
    englishtitle: "loyalcustomer",
    link: "thong-tin/khach-hang",
  },
  {
    title: "Chính sách đổi BestDeal Coin",
    englishtitle: "bestdeal-coin",
    link: "thong-tin/besdeal-coin",
  },
  {
    title: "Cấp độ member",
    englishtitle: "rankmember",
    link: "thong-tin/rank-khach-hang",
  },
  {
    title: "Hướng dẫn đặt hàng",
    englishtitle: "order",
    link: "thong-tin/dat-hang",
  },
  {
    title: "Thẻ quà tặng mobile gift",
    englishtitle: "aboutus",
    link: "thong-tin/qua-tang",
  },
  {
    title: "Quy trình giao hàng",
    englishtitle: "aboutus",
    link: "thong-tin/giao-hang",
  },
  {
    title: "Điều khoản sử dụng",
    englishtitle: "aboutus",
    link: "thong-tin/dieu-khoan",
  },
  {
    title: "Chính sách đổi trả",
    englishtitle: "aboutus",
    link: "thong-tin/doi-tra",
  },
  {
    title: "Chính sách bảo mật",
    englishtitle: "aboutus",
    link: "thong-tin/bao-mat",
  },
];

const Introduce = () => {
  const router = useRouter();
  const [content, setContent] = useState({});
  const [type, setType] = useState({
    title: "Giới thiệu BestDeal",
    englishtitle: "aboutus",
  });

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/${type.englishtitle}`,
          {
            method: "GET",
          }
        );
        const data = await res.json();
        setContent(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    callApi();
  }, [type.englishtitle]);

  return content ? (
    <div className={cx("wrapper")}>
      <BreadCrumb />
      <div className={cx("aboutus-wrapper") + " row sm-gutter"}>
        <div className={cx("aboutus-left") + " col l-3"}>
          <div className={cx("title")}>THÔNG TIN</div>
          <div className={cx("list")}>
            {tabs.map((tab: any, index) => (
              <Link
                className={cx("link", type === tab ? "active" : "")}
                href={tab.link}
                key={index}
                onClick={() => setType(tab)}
              >
                {tab.title}
              </Link>
            ))}
          </div>
        </div>
        <div className={cx("aboutus-right") + " col l-9"}>
          {type.englishtitle === "aboutus" && (
            <IntroduceContent data={content} />
          )}
          {type.englishtitle === "loyalcustomer" && (
            <LoyalCustomer data={content} />
          )}
          {type.englishtitle === "bestdeal-coin" && (
            <CoinPolicy data={content} />
          )}
          {type.englishtitle === "rankmember" && (
            <RankMember data={content} />
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Introduce;
