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

function Search() {
  // searchbar
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
    console.log(formData.get("address"));
  });

  const tokenName = 'token';
  const tokenSymbol = 'TKN';
  const totalSupply = '8888'

  return (
    <div class="flex flex-col">
      <Form>
        <label for="address">Search: </label>
        <input type="text" name="address" placeholder="Enter address here" />
        <input type="submit" value="ok" />
      </Form>
      <div class='flex flex-col'>
        <p>Token Name: {tokenName}</p>
        <p>Token Symbol: {tokenSymbol}</p>
        <p>Total Supply: {totalSupply}</p>
      </div>
    </div>
  );
}
