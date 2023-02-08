import Image from 'next/image'
import headBack from '../assets/pokePoker.jpg'
import logo from '../assets/pokenextlogo.png'
import styles from '../styles/Home.module.css'


export default function Home() {
    return (
        <div className={styles.homeWrapper}>
            <header className={styles.header}>
                <div className={styles.logoBox}>
                    <Image src={logo} className={styles.logo} alt='Pokeapp Logo' />
                </div>
            </header>
            <body>
                <div className={styles.bannerBox}>
                    {/* Image Slider de Banners de Pokemon => Component */}
                    <Image src={headBack} className={styles.logo} alt='Image Slider' />
                </div>
            </body>
        </div>
    )
}
