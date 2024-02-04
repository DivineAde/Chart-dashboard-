import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { DialogCloseButton } from "./ViewDialog";

const invoices = [
  {
    name: "Marcus Bergson",
    image: "/Frame 1000003208.png",
    date: "Nov 15, 2023",
    amount: "80,000",
    status: "paid",
    invoice: "INV002",
    color: true,
  },
  {
    name: "Jaydon Vaccaro",
    image: "/Frame 1000003208 (1).png",
    date: "Nov 15, 2023",
    amount: "150,000",
    status: "Refund",
    invoice: "INV002",
    color: false,
  },
  {
    name: "Corey Schleifer",
    image: "/Frame 1000003208 (2).png",
    date: "Nov 14, 2023",
    amount: "87,000",
    status: "paid",
    invoice: "INV002",
    color: true,
  },
  {
    name: "Copper Press",
    image: "/Frame 1000003208 (3).png",
    date: "Nov 14, 2023",
    amount: "100,000",
    status: "Refund",
    invoice: "INV002",
    color: false,
  },
  {
    name: "Philip Lublin",
    image: "/Frame 1000003208 (4).png",
    date: "Nov 13, 2023",
    amount: "73,000",
    status: "Payed",
    invoice: "INV002",
    color: true,
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Invoice</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell className="font-medium flex items-center gap-2">
              <Image
                src={invoice.image}
                width={32}
                height={32}
                alt="profile picture"
              />
              {invoice.name}
            </TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell
              className={`${
                invoice.color ? "text-[#34CAA5]" : "text-[#ED544E]"
              } capitalize`}
            >
              {invoice.status}
            </TableCell>
            <TableCell className="">
              <DialogCloseButton />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/*<TableFooter>
        <TableRow>
          <TableCell colSpan={3}></TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableFooter>*/}
    </Table>
  );
}
