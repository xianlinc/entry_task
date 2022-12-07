import { createSignal, Show } from "solid-js";
import { createRouteAction } from "solid-start";

type TokenInfo = {
  name: string;
  symbol: string;
  totalSupply: string;
};

//TODO: Add error handling to requests
export default function Search() {
  const [tokenInfo, setTokenInfo] = createSignal<TokenInfo>({
    name: "",
    symbol: "",
    totalSupply: "",
  });

  // display search results
  const [tokenAdress, setTokenAddress] = createSignal<string>("");
  const [gettingInfo, getInfo] = createRouteAction(async () => {
    const response = await fetch("http://localhost:3030", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenAddress: tokenAdress() }),
    });
    if (!response.ok) throw new Error("Failed to fetch token info");
    const data: TokenInfo = await response.json();
    setTokenInfo(data);
  });

  const handleSubmission = (e: Event) => {
    e.preventDefault();
    getInfo();
  };

  return (
    <div class="flex flex-col border max-w-2xl mx-auto">
      <form class="flex border">
        <input
          type="text"
          name="tokenAddress"
          placeholder="Enter Token address"
          value={tokenAdress()}
          onChange={(e) => setTokenAddress(e.currentTarget.value)}
          class="w-full p-4"
        />
        <button
          disabled={gettingInfo.pending}
          onClick={(e) => handleSubmission(e)}
          class="p-4"
        >
          SEARCH
        </button>
      </form>
      <div class="flex flex-col text-left p-4 gap-2">
        <p>Token Name: {tokenInfo().name}</p>
        <p>Token Symbol: {tokenInfo().symbol}</p>
        <p>Total Supply: {tokenInfo().totalSupply}</p>
      </div>
      <Show when={gettingInfo.error}>
        <div class="text-red-500 pb-4">{gettingInfo.error.message}</div>
      </Show>
    </div>
  );
}
