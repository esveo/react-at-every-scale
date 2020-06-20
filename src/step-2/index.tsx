import React, { useState } from "react";
import { render } from "react-dom";

function LoadingButton(props: { onClick: () => Promise<any> }) {
  const [state, setState] = useState<"idle" | "loading">("idle");

  async function onClick() {
    if (state === "loading") return;

    setState("loading");
    try {
      await props.onClick();
    } finally {
      setState("idle");
    }
  }

  return (
    <button onClick={onClick}>
      {state === "idle" ? "Starte Ladevorgang" : "Warten auf antwort"}
    </button>
  );
}

function App() {
  const [pokemon, setPokemon] = useState<
    { url: string; name: string }[] | null
  >(null);

  async function loadData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    setPokemon(data.results);
  }

  return (
    <div>
      <LoadingButton onClick={loadData}></LoadingButton>
      {pokemon && (
        <ul>
          {pokemon.map((p) => (
            <li key={p.url}>{p.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const root = document.getElementById("root");

render(<App />, root);
