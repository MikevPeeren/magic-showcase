import styles from "./LoadingIcon.module.scss";

const LoadingIcon = () => {
  return (
    <div className="absolute z-10">
      <div className={`${styles.LoadingIcon}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingIcon;
