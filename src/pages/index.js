import Navbar from "./components/Navbar";
import Image from "next/image";
import HeaderImage from "../assets/pokenextlogo.png"
import React, { useState, useEffect } from "react";
import { getPokemons } from "../services"

export default function Home() {

  const [navTitles, setTitles] = useState(['Home', 'Team', 'Trainer', 'Get Help', 'About us'])
  const [page, setPage] = useState(1)
  const [mainList, setList] = useState([])

  useEffect(() => {

    getPokemons(page).then((data) => setList(data))

  }, [page])

  return (
    <>
      <header>
        <div>
          <Image src={HeaderImage}></Image>
        </div>
        <Navbar titles={navTitles} />
      </header>
      <main>
      </main>
    </>
  );
}
