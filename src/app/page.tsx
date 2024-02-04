import { Overview } from "@/components/Chart";
import { Order } from "@/components/Order";
import Sales from "@/components/Sales";
import TopPlatform from "@/components/TopPlatform";
import TotalComponents from "@/components/TotalComponents";


export default function Home() {
  return (
   <main className="ml-0 md:ml-20 p-4 bg-[#fafafa] dark:bg-[var(--background)]">
    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-start gap-2">
      <Sales />
      <TotalComponents />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-start gap-3 mt-12">
      <Order />
      <TopPlatform />
    </div>
   </main>
  );
}
