"use client"

import * as React from "react";
import { Progress } from "@/components/ui/progress";

type Props = {};

const TopData = [
  { name: "Book Bazaar", color: "#6160DC", amount: "$2,500,000", increase: "+15%" },
  { name: "Artisan Aisle", color: "#54C5EB", amount: "$1,800,000", increase: "+10%" },
  { name: "Toy Troop", color: "#FFB74A", amount: "$1,200,000", increase: "+8%" },
  { name: "Xstore", color: "#FF4A55", amount: "$1,000,000", increase: "+5%" },
];

const TopPlatform = (props: Props) => {
  const initialProgressValues = [70, 50, 40, 30]; // Set initial values for each progress bar
  const [progressValues, setProgressValues] = React.useState(initialProgressValues);

  React.useEffect(() => {
    const timers = initialProgressValues.map((value, index) =>
      setTimeout(() => {
        const newProgressValues = [...progressValues];
        newProgressValues[index] = value + 10; // Update progress values individually
        setProgressValues(newProgressValues);
      }, 500 * index)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [progressValues]); // Add progressValues to dependencies

  return (
    <div className='bg-white dark:bg-[var(--background)] p-6 rounded-3xl'>
      <div className='flex justify-between items-center'>
        <h1 className=" font-semibold">Top Platform</h1>
        <a className=" text-[#34CAA5]">See all</a>
      </div>

      <div className='flex flex-col gap-5 pt-6'>
        {TopData.map((item, index) => (
          <div key={index}>
            <h1 className="font-bold">{item.name}</h1>
            <Progress value={progressValues[index]} className="w-[100%]" indicatorColor={`bg-[#6160DC]`} />
            <div className="flex items-center justify-between pt-2">
              <h3>{item.amount}</h3>
              <span>{item.increase}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPlatform;
