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
  const [_, { Form }] = createRouteAction(async (formData: FormData) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    //   const username = formData.get("username");
    //   if (username === "admin") {
    //     return redirect("/admin");
    //   } else {
    //     throw new Error("Invalid username");
    //   }
    //   return redirect("/home");
    // });
    // send data to server and get results
    console.log(formData.get("tokenAddress"));
    // send formData as a post request to server at http://localhost:3030
    const response = await fetch("http://localhost:3030", {
      method: "POST",
      mode: "cors",
      body: formData,
    });
    const data: TokenInfo = await response.json();
    console.log(data);
    setTokenInfo(data);
  });

  return (
    <div class="flex flex-col">
      <Form>
        <label for="tokenAddress">Search: </label>
        <input
          type="text"
          name="tokenAddress"
          placeholder="Enter address here"
        />
        <input type="submit" value="ok" />
      </Form>
      <div class="flex flex-col">
        <p>Token Name: {tokenInfo().name}</p>
        <p>Token Symbol: {tokenInfo().symbol}</p>
        <p>Total Supply: {tokenInfo().totalSupply}</p>
      </div>
    </div>
  );
}
