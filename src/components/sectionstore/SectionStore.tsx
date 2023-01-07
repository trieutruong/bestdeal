import styles from "styles/components/SectionArticle/SectionArticle.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

const cx = classNames.bind(styles);

interface Props {
  title: string;
  children?: any
}

const SectionStore: React.FC<Props> = ({ title, children }) => {
  return <div className={cx("section-store")}>
    <div className={cx('header')}>
        <Link href="" className={cx('section-link')}>{title}</Link>
    </div>
    <div className={cx('body')}>
        {children}
    </div>
  </div>;
};

export default SectionStore;
