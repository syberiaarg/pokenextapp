import Image from "next/image";
import pokeHeader from "../assets/pokenextlogo.png"


export default function Home() {
  return (
    <div>
      <header>
        <Image src={pokeHeader} />
      </header>
      <aside>
        <ul>
          <li>Home</li>
          <li>Team</li>
          <li>Trainer</li>
          <li>Get Help</li>
        </ul>
      </aside>
      <footer>
        <div>PokenextApp © 2023</div>
      </footer>
    </div>
  );
}
