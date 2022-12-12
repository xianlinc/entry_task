import { Accessor, createSignal, Show } from "solid-js";
import { createRouteAction } from "solid-start";

type TokenInfo = {
  name: string;
  symbol: string;
  totalSupply: string;
};

export default function Search() {
  const [tokenInfo, setTokenInfo] = createSignal<TokenInfo>({
    name: "",
    symbol: "",
    totalSupply: "",
  });

  const [tokenAdress, setTokenAddress] = createSignal<string>("");

  // display search results
  const [gettingInfo, getInfo] = createRouteAction(async () => {
    const response = await fetch("http://localhost:3030", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenAddress: tokenAdress() }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch token info");
    }

    const data: TokenInfo = await response.json();
    setTokenInfo(data);
  });

  const handleSubmission = (e: Event) => {
    e.preventDefault();
    getInfo();
  };

  return (
    <div class="flex flex-col max-w-xl mx-auto gap-2">
      <form class="flex">
        <input
          type="text"
          name="tokenAddress"
          placeholder="Enter Token address"
          value={tokenAdress()}
          onChange={(e) => setTokenAddress(e.currentTarget.value)}
          class="w-full p-2 mr-2 border rounded"
        />
        <button
          disabled={gettingInfo.pending}
          onClick={(e) => handleSubmission(e)}
          class="px-4 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          SEARCH
        </button>
      </form>
      <Results tokenInfo={tokenInfo} />
      <Show when={gettingInfo.error}>
        <div class="text-red-500">{gettingInfo.error.message}</div>
      </Show>
    </div>
  );
}

function Results({ tokenInfo }: { tokenInfo: Accessor<TokenInfo> }) {
  return (
    <div class="flex flex-col text-left p-4 gap-2 border rounded">
      <p>
        <span class="font-bold">Token Name: </span>
        {tokenInfo().name}
      </p>
      <p>
        <span class="font-bold">Token Symbol: </span>
        {tokenInfo().symbol}
      </p>
      <p>
        <span class="font-bold">Total Supply: </span>
        {tokenInfo().totalSupply}
      </p>
    </div>
  );
}
