import styles from '../styles/Home.module.css'
import Image from 'next/image'
import firstImage from '../assets/pokePoker.jpg'
import secondImage from '../assets/pokeSword.jpg'
import thirdImage from '../assets/pokePika.jpg'


const MyCarousel = () => (
    <div className={styles.carr}>
        <button className={styles.prevButton}>{"<"}</button>
        <div className={styles.bannerBox}>
            <Image src={firstImage} className={styles.logo} alt='1' />
            <Image src={secondImage} className={styles.logo} alt='2' />
            <Image src={thirdImage} className={styles.logo} alt='3' />

        </div>

        <button className={styles.nextButton}>{">"}</button>
    </div>

);

export default MyCarousel
