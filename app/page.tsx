import Image from "next/image";
import { Card } from "@/app/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between px-8 py-16 md:py-32 md:px-16 bg-white dark:bg-black sm:items-start">
        <Card />
      </main>
    </div>
  );
}
