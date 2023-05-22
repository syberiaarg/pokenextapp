import styles from "./Navbar.module.scss";


const Navbar = ({ titles }) => (

    <nav className={styles.navWrap}>
        <ul className={styles.navList}>
            {titles.map((titles) => (<button><li key={titles}>{titles}</li></button>))}
        </ul>
    </nav>

)


export default Navbar
