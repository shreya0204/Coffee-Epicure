import Head from "next/head";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Card from "../components/Card";
import coffeeStores from "../data/Data.json";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Epicure</title>
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View Stores Nearby!"
          handleonClick={handleOnBannerBtnClick}
        />
        <Image
          src="/static/hero_girl.png"
          alt="hero-image"
          width={400}
          height={400}
        ></Image>
      </main>
      <div className={styles.cardLayout}>
        {coffeeStores.map((coffeeStore) => {
          return(
            // eslint-disable-next-line react/jsx-key
            <Card
              className={styles.card}
              name={coffeeStore.name}
              imgUrl={coffeeStore.imgUrl}
              href={`/coffee-store/${coffeeStore.id}`}
            />)
          })}
      </div>
    </div>
  );
}
