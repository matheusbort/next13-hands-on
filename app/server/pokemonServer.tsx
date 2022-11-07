async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}

export default async function PokemonStats({ name }) {
  // Wait for the playlists...
  const pokemon = await getPokemon(name);

  return (
    <ul>
      {pokemon &&
        pokemon.stats.map((stat) => (
          <li style={{ color: "white" }} key={stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
    </ul>
  );
}
