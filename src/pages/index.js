import Navbar from "./components/Navbar";
import SelectType from "./components/SelectType";
import Image from "next/image";
import HeaderImage from "../assets/pokelogotransparent.png"
import React, { useState, useEffect } from "react";
import { getPokemons, getTypes } from "../services"
import styles from './Index.module.scss'

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
        <header className={styles.header}>
          <div className={styles.logo}>
            <Image src={HeaderImage} width={250} alt={'Pokemon App Logo'}></Image>
          </div>
          <div>
            <Navbar titles={navTitles} />
          </div>
        </header>
        <div className={styles.body}>
          <SelectType types={typeList} />
        </div>
        <footer className={styles.footer}>
          © Pokenextapp 2023
        </footer>
      </main>
    </>
  );
}
