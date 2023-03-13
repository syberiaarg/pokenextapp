



const Navbar = ({ titles }) => (

    <nav>
        <ul>
            {titles.map((titles) => (<li key={titles}>{titles}</li>))}
        </ul>
    </nav>

)


export default Navbar
