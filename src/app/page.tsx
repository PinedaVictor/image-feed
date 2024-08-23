import { Header } from "@/components/atomic/atoms/Header";
import { ImageGrid, SearchBar } from "@/components/atomic/molecules";

export default function Home() {
  return (
    <main>
      <div className="md:flex flex-wrap items-center md:items-center bg-slate-700 p-4 rounded-md">
        <Header title="Buzz Solutions Coding Challenge" />
        <SearchBar />
      </div>
      <ImageGrid />
    </main>
  );
}
