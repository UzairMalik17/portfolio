import { Header } from "@/components/navigation/header";
import { Hero } from "@/components/hero/hero";
import { SelectedWork } from "@/components/selected-work/selected-work";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-20 sm:gap-24 lg:gap-32">
        <Hero />
        <SelectedWork />
      </main>
    </>
  );
}
