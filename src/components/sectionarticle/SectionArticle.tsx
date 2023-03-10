import styles from "styles/components/SectionArticle/SectionArticle.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

const cx = classNames.bind(styles);

interface Props {
  title: string;
  view: string;
  children: any;
}

const SectionArticle: React.FC<Props> = ({ title, view, children }) => {
  return (
    <div className={cx("section-article")}>
      <div className={cx("section-article__header")}>
        <h2 className={cx("section-article__title")}>
          <Link
            href=""
            className={cx(
              "section-article__title-link",
              "section-article__title-link--special"
            )}
          >
            {title}
          </Link>
        </h2>
        <h2 className={cx("section-article__title")}>
          <Link href="" className={cx("section-article__title-link")}>
            {view}
          </Link>
        </h2>
      </div>
      <div className={cx("section-article__body")}>
        {children}
        {/* <div className={cx("col l-3")}>
          <Link href="">
            <div className={cx("img-frame")}>
              <Image
                src=""
                alt=""
                className={cx("img-banner")}
                width="393"
                height="157"
              />
            </div>
            <div className={cx("section-article__description")}></div>
          </Link>
        </div>
        <div className={cx("col l-3")}>
          <Link href="">
            <div className={cx("img-frame")}>
              <Image
                src=""
                alt=""
                className={cx("img")}
                width="20"
                height="20"
              ></Image>
            </div>
            <div className={cx("section-article__description")}></div>
          </Link>
        </div>
        <div className={cx("col l-3")}>
          <Link href="">
            <div className={cx("img-frame")}>
              <Image
                src=""
                alt=""
                className={cx("img")}
                width="20"
                height="20"
              ></Image>
            </div>
            <div
              className={cx("section-article__description")}
              title="M??y khoan BOSCH ???????c bi???t ?????n l?? m???t s???n ph???m n???i ti???ng v???i ????? b???n cao"
            >
              <span className={cx("section-article__description-text")}>
                C??ch ch???n mua, l???p ?????t v?? thay th??? kh??a tay g???t cho gia ch???
              </span>
            </div>
          </Link>
        </div>
        <div className={cx("col l-3")}>
          <Link href="">
            <div className={cx("img-frame")}>
              <Image
                src=""
                alt=""
                className={cx("img")}
                width="20"
                height="20"
              ></Image>
            </div>
            <span className={cx("section-article__description-text")}>
              B???n ???? bi???t c??ch s??? d???ng m??y m??i bosch an to??n v?? ????ng c??ch?
            </span>
          </Link>
        </div>
        <div className={cx("col l-3")}>
          <Link href="">
            <div className={cx("img-frame")}>
              <Image
                src=""
                alt=""
                className={cx("img")}
                width="20"
                height="20"
              ></Image>
            </div>
            <span className={cx("section-article__description-text")}>
              L???p ?????t kh??a tay n???m tr??n ????n gi???n ch??? v???i v??i b?????c ????n gi???n
            </span>
          </Link>
        </div>
        <div className={cx("col l-3")}>
          <Link href="">
            <div className={cx("img-frame")}>
              <Image
                src=""
                alt=""
                className={cx("img")}
                width="20"
                height="20"
              ></Image>
            </div>
            <span className={cx("section-article__description-text")}>
              L???p ?????t v??i r???a b??t n??ng l???nh d??? d??ng cho gia ch???
            </span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default SectionArticle;
