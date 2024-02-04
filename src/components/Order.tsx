import { TableDemo } from "./Table";

export function Order() {
  return (
    <div className=" bg-white dark:bg-[var(--background)]  p-6 rounded-3xl">
      <div className="flex justify-between items-center">
       <h1 className=" font-bold">Last Orders</h1>
       <a className="text-[#34CAA5] cursor-pointer">See all</a>
      </div>
      <TableDemo />
    </div>
  )
}