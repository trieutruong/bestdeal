import styles from "styles/components/NextButton/NextButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  onClick: () => void;
}

const NextButton: React.FC<Props> = ({ onClick }) => {
  return <div className={cx("next-btn")} onClick={onClick}></div>;
};

export default NextButton;
