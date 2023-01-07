import styles from "styles/components/ArticleItem/ArticleItem.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

const cx = classNames.bind(styles);

interface Props {
  data: any;
}

const ArticleItem: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={{ pathname: "/blog", query: { title: data.name } }}
      className={cx("img-link")}
    >
      <div className={cx("img-frame")}>
        <img
          src={data.image}
          alt={data.description}
          className={cx("img-banner")}
        />
      </div>
      <div className={cx("section-article__description")}>
        <span className={cx("section-article__description-text")}>
          {data.description}
        </span>
      </div>
    </Link>
  );
};

export default ArticleItem;
