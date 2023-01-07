import styles from "styles/components/PrevButton/PrevButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
    onClick: () => void
}

const PrevButton: React.FC<Props> = ({ onClick }) => {
  return <div className={cx("prev-btn")} onClick={onClick}></div>;
};

export default PrevButton;
