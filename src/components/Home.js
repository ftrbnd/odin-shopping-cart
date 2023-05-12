import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.text}>
        <p>An entirely new typing experience</p>
        <h1>The Envoy</h1>
        <h6>Available now for preorder</h6>
      </div>
      <img src="https://cdn.shopify.com/s/files/1/0279/3426/1330/files/envoy-walnut_1760x.jpg" alt="Mode Envoy keyboard" className={styles.homeImg} />
    </div>
  );
}

export default Home;
