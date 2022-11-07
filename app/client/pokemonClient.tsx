"use client";

import { useEffect, useState } from "react";

async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}

export default function PokemonStats({ name }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getPokemon(name).then((r) => setPokemon(r));
  }, []);

  return (
    <ul>
      {!pokemon
        ? "Carregando..."
        : pokemon.stats.map((stat) => (
            <li style={{ color: "white" }} key={stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
    </ul>
  );
}
