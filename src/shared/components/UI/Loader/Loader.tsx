import PageContainer from "../../baseComponents/PageContainer";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <PageContainer>
      <div className={styles.loadingContainer}>
        <div className={styles.ldsEllipsis}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Loader;
