import Navbar from "./components/Navbar";
import SelectType from "./components/SelectType";
import Image from "next/image";
import HeaderImage from "../assets/pokenextlogo.png"
import React, { useState, useEffect } from "react";
import { getPokemons, getTypes } from "../services"

export default function Home() {

  const [navTitles, setTitles] = useState(['Home', 'Team', 'Trainer', 'Get Help', 'About us'])
  const [page, setPage] = useState(1)
  const [mainList, setList] = useState([]) // Pokemons successfully fetched
  const [typeList, defineList] = useState([])

  useEffect(() => {

    getPokemons(page).then((data) => setList(data))
    getTypes().then((data) => defineList(data))

  }, [page])

  return (
    <>
      <main>
        <header>
          <div>
            <Image src={HeaderImage} alt={'Pokemon App Logo'}></Image>
          </div>
          <Navbar titles={navTitles} />
        </header>
        <div>
          <SelectType types={typeList} />
        </div>
        <footer>
          © Pokenextapp 2023
        </footer>
      </main>
    </>
  );
}
