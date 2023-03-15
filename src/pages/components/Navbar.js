import styles from "./Navbar.module.scss";


const Navbar = ({ titles }) => (

    <nav>
        <ul className={styles.nav}>
            {titles.map((titles) => (<button><li key={titles}>{titles}</li></button >))}
        </ul>
    </nav>

)


export default Navbar
