import { createSignal } from "solid-js";
import { A, createRouteAction } from "solid-start";
export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="text-4xl">Search here</h1>
      <Search />
    </main>
  );
}

// src/components/Searchbar.tsx

type TokenInfo = {
  name: string;
  symbol: string;
  totalSupply: string;
};

function Search() {
  // searchbar

  const [tokenInfo, setTokenInfo] = createSignal<TokenInfo>({
    name: "",
    symbol: "",
    totalSupply: "",
  });
  // display search results
  const [tokenAdress, setTokenAddress] = createSignal<string>("");
  const [_, getInfo] = createRouteAction(async () => {
    const response = await fetch("http://localhost:3030", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenAddress: tokenAdress() }),
    });
    const data: TokenInfo = await response.json();
    setTokenInfo(data);
  });

  return (
    <div class="flex flex-col">
      <form>
        <label for="tokenAddress">Search: </label>
        <input
          type="text"
          name="tokenAddress"
          placeholder="Enter address here"
          value={tokenAdress()}
          onChange={(e) => setTokenAddress(e.currentTarget.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            getInfo();
          }}
        >
          ok
        </button>
      </form>
      <div class="flex flex-col">
        <p>Token Name: {tokenInfo().name}</p>
        <p>Token Symbol: {tokenInfo().symbol}</p>
        <p>Total Supply: {tokenInfo().totalSupply}</p>
      </div>
    </div>
  );
}
