import styles from "styles/components/Item/Item.module.scss";
import classNames from "classnames/bind";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

interface Props {
  data: any;
  isProduct: boolean;
}

const Item: React.FC<Props> = ({ data, isProduct }) => {
  const [active, setActive] = useState(false);
  const [like, setLike] = useState(false);

  return data.type !== "brand" ? (
    <div className={isProduct ? cx("col l-2-4 md-4 col-6") : ""}>
      <Link
        className={cx("flash-sale__product-item", !isProduct ? "gutter" : "")}
        href={{
          pathname: `/productdetail`,
          query: { product: data.link, id: data._id },
        }}
      >
        <div
          className={cx("flash-sale__product-item-img-frame")}
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>
        <div className={cx("skill-set")}>
          <div className={cx("skill-set__flex")}>
            <div className={cx("skill-set__list")}>
              <div className={cx("skill-set__item")}>
                <div className={cx("skill-set__detail")}>
                  <div
                    className={cx(
                      "skill-set__bar",
                      "skill-set__bar--percentage"
                    )}
                  >
                    <div className={cx("skill-set-fire")}></div>
                    <span className={cx("skill-set__sold-text")}>
                      Đã bán 934
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className={cx("flash-sale__product-item-name")}>{data.name}</h4>
        <div className={cx("flash-sale__product-item-price")}>
          <span className={cx("flash-sale__product-item-price-current")}>
            {data.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>
          <span className={cx("flash-sale__product-item-price-old")}>
            {data.oldPrice.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
        <div className={cx("flash-sale__product-item-action")}>
          <div className={cx("flash-sale__product-item-rating")}>
            <FontAwesomeIcon
              icon={faStar}
              className={cx("flash-sale__product-item__star--gold")}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStar}
              className={cx("flash-sale__product-item__star--gold")}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStar}
              className={cx("flash-sale__product-item__star--gold")}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStar}
              className={cx("flash-sale__product-item__star--gold")}
            ></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={cx("rating-comment")}>(200 bình luận)</div>
        </div>
        <span className={cx("sale-off")}>
          {(100 - (data.price / data.oldPrice) * 100).toFixed()}% GIẢM
        </span>
      </Link>
    </div>
  ) : (
    <Link href="/brand" className={cx("brand-famous__item-link")}>
      <div
        className={cx("brand-famous__img")}
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <h5 className={cx("brand-famous__label")}>{data.name}</h5>
    </Link>
  );
};

export default Item;
