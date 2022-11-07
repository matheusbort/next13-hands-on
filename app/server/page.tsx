import Image from "next/image";
import { Suspense } from "react";
import styles from "../page.module.css";
import PokemonStats from "./pokemonServer";

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  return res.json();
}

async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}

async function PokemonImage({ name }) {
  const pokemon = await getPokemon(name);

  return (
    <Image
      alt={pokemon.name}
      src={pokemon.sprites.front_default}
      width={32}
      height={32}
    />
  );
}

export default async function Home() {
  const data = await getData();

  return (
    <div className={styles.grid}>
      {data.results.map((r) => {
        return (
          <a className={styles.card}>
            <div style={{ display: "flex", height: "32px" }}>
              <PokemonImage name={r.name} /> <h2>{r.name}</h2>
            </div>
            <Suspense fallback="...Loading">
              <PokemonStats key={r.name} name={r.name} />
            </Suspense>
          </a>
        );
      })}
    </div>
  );
}
