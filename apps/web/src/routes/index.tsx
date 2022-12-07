import { createSignal } from "solid-js";
import { createRouteAction } from "solid-start";
import Search from '../components/Search'
export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="text-2xl m-4">CW20 Token Info Search</h1>
      <Search />
    </main>
  );
}
