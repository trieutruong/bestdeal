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
              title="Máy khoan BOSCH được biết đến là một sản phẩm nổi tiếng với độ bền cao"
            >
              <span className={cx("section-article__description-text")}>
                Cách chọn mua, lắp đặt và thay thế khóa tay gạt cho gia chủ
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
              Bạn đã biết cách sử dụng máy mài bosch an toàn và đúng cách?
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
              Lắp đặt khóa tay nắm tròn đơn giản chỉ với vài bước đơn giản
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
              Lắp đặt vòi rửa bát nóng lạnh dễ dàng cho gia chủ
            </span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default SectionArticle;
