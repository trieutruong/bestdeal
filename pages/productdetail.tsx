import {
  faCartPlus,
  faCartShopping,
  faCheck,
  faCheckCircle,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";
import styles from "styles/ProductDetail.module.scss";
import BreadCrumb from "../src/components/breadcrumb/breadcrumb";
import Button from "../src/components/button/Button";

const cx = classNames.bind(styles);

const ProductDetail = () => {
  return (
    <div className={cx("product-detail-wrap")}>
      <BreadCrumb />
      <div className={cx("product-detail-body") + " row"}>
        <div className={cx("product-detail-body-left") + " col l-10"}>
          <div className={cx("tab-product-detail")}>
            <div className={cx("tab-product-detail--left")}>
              <div className={cx("product-images-group")}>
                <div className="product-images">
                  <a className={cx("product-images__link")} href="/">
                    <img
                      src="/img/products/bo-voi-sen.png"
                      alt=""
                      className={cx("product-images__img")}
                    />
                  </a>
                  <a className={cx("product-images__link")} href="/">
                    <img
                      src="/img/products/bo-voi-sen.png"
                      alt=""
                      className={cx("product-images__img")}
                    />
                  </a>
                  <a className={cx("product-images__link")} href="/">
                    <img
                      src="/img/products/bo-voi-sen.png"
                      alt=""
                      className={cx("product-images__img")}
                    />
                  </a>
                </div>
                <div className={cx("product-thumbnail")}>
                  <img
                    src="/img/products/bo-voi-sen.png"
                    alt=""
                    className={cx("product-thumbnail__img")}
                  />
                </div>
              </div>
              <div className={cx("list-button-group")}>
                <div className={cx("like-button")}>
                  <span className={cx("like-icon")}>
                    <FontAwesomeIcon icon={faHeart} />
                    {/* <i className={cx("like-icon--fill fa-solid fa-heart")}></i>
                    <i className={cx("like-icon--empty far fa-heart")}></i> */}
                  </span>
                  <span className={cx("like-favourite")}>
                    Thêm vào danh sách yêu thích
                  </span>
                </div>
              </div>
            </div>
            <div className={cx("tab-product-detail--right")}>
              <a href="/" className={cx("product-brand")}>
                Caesar
              </a>
              <h1 className={cx("product-name")}>Vòi rửa mặt</h1>
              <div className={cx("product-sub-info")}>
                <div className={cx("product-sub-info--item")}>
                  <span className={cx("product-sub-info--product-code")}>
                    Mã sản phẩm: 8809502184308
                  </span>
                </div>
                <div className={cx("product-sub-info--item")}>
                  <div className={cx("list-stars")}>
                    <FontAwesomeIcon
                      icon={faStar}
                      className={cx("list-stars--gold")}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={cx("list-stars--gold")}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={cx("list-stars--gold")}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={cx("list-stars--gold")}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={cx("list-stars--gold")}
                    />
                    <span>0 đánh giá</span>
                  </div>
                </div>
              </div>
              <p className={cx("product-price")}>
                295.000đ <span>(Đã bao gồm VAT)</span>
              </p>
              <div className={cx("product-discount")}>
                <span>Giá hãng: 342.000 -</span>
                <span>Tiết kiệm được 34.200đ</span>
                <span className={cx("save")}>(10%)</span>
              </div>
              <div className={cx("product-type")}>
                <div
                  className={cx(
                    "product-type__link",
                    "product-type__link--active"
                  )}
                >
                  <img
                    src="/img/products/bo-voi-sen.png"
                    alt=""
                    className={cx("product-type__img")}
                  />
                </div>
                <div className={cx("product-type__link")}>
                  <img
                    src="/img/products/bo-voi-sen-2.png"
                    alt=""
                    className={cx("product-type__img")}
                  />
                </div>
                <div className={cx("product-type__link")}>
                  <img
                    src="/img/products/bo-voi-sen-3.png"
                    alt=""
                    className={cx("product-type__img")}
                  />
                </div>
              </div>
              <div className={cx("product-quantity")}>
                <span>Số lượng: </span>
                <input type="number" name="quantity" min="1" value="1" />
              </div>
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
              <div className={cx("product-buttons-group")}>
                <div className={cx("store-btn-wrapper")}>
                  <Button
                    className={cx("store-btn")}
                    outline
                    leftIcon={
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx("checked-icon")}
                      />
                    }
                  >
                    <span>1 Chi nhánh còn sản phẩm</span>
                  </Button>
                  <div className={cx("instock-box", "beautify-scroll")}>
                    <div className={cx("list-store")}>
                      <div className={cx("list-store-item")}>
                        <p className={cx("list-store-city")}>HÀ NỘI</p>
                        <div className={cx("store-item__location")}>
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={cx("checked-icon")}
                          />
                          <div className={cx("store-item__location-wrapper")}>
                            <p className={cx("store-item__location-district")}>
                              Quận Thanh Xuân
                            </p>
                            <p className={cx("store-item__location-address")}>
                              <span>Còn hàng</span> tại 528 Nguyễn Trãi
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list-store-item")}>
                        <p className={cx("list-store-city")}>HÀ NỘI</p>
                        <div className={cx("store-item__location")}>
                          {/* <i className={cx()}"checked-icon fa-solid fa-circle-check"></i> */}
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={cx("checked-icon")}
                          />
                          <div className={cx("store-item__location-wrapper")}>
                            <p className={cx("store-item__location-district")}>
                              Quận Thanh Xuân
                            </p>
                            <p className={cx("store-item__location-address")}>
                              <span>Còn hàng</span> tại 528 Nguyễn Trãi
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list-store-item")}>
                        <p className={cx("list-store-city")}>HÀ NỘI</p>
                        <div className={cx("store-item__location")}>
                          <i className={cx("checked-icon")}></i>
                          <div className={cx("store-item__location-wrapper")}>
                            <p className={cx("store-item__location-district")}>
                              Quận Thanh Xuân
                            </p>
                            <p className={cx("store-item__location-address")}>
                              <span>Còn hàng</span> tại 528 Nguyễn Trãi
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className={cx("cart-btn")}
                  secondary
                  leftIcon={<FontAwesomeIcon icon={faCartPlus} />}
                >
                  <span>Giỏ hàng</span>
                </Button>
                <Button
                  className={cx("buy-btn")}
                  primary
                  leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                >
                  <span>Mua ngay</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("product-detail-body-right") + " col l-2"}>aaa</div>
      </div>
    </div>
  );
};

export default ProductDetail;
