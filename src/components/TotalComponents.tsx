import Image from "next/image";
import React from "react";

type Props = {};

const TotalRevenue = [
  {
    image: "/box-tick.png",
    imgTwo: "/Group 3.png",
    title: "Total Order",
    digit: 350,
    percent: "23.5%",
    specialCondition: true
  },
  {
    image: "/3d-rotate.png",
    imgTwo: "/Group 3 (1).png",
    title: "Total Refund",
    digit: 250,
    percent: "23.5%",
    specialCondition: false
  },
  {
    image: "/shopping-cart.png",
    imgTwo: "/Group 3 (1).png",
    title: "Average Sales",
    digit: 1576,
    percent: "23.5%",
    specialCondition: false
  },
  {
    image: "/coin.png",
    imgTwo: "/Group 3.png",
    title: "Total Incomne",
    digit: "$350000",
    percent: "23.5%",
    specialCondition: true
  },
];

const TotalComponents = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
      {TotalRevenue.map((item) => (
        <div
          key={item.title}
          className="w-full h-[179px] flex flex-col p-4 bg-white dark:bg-[var(--background)] dark:border dark:border-gray-800 rounded-3xl"
        >
          <div className="flex items-center justify-between">
            <div className="border border-[#E6E6E6] p-2 rounded-full">
              <Image
                src={item.image}
                width={24}
                height={24}
                alt="image"
                className=""
              />
            </div>
            <Image src={item.imgTwo} width={104} height={32} alt="image" />
          </div>
          <div>
            <h1 className=" text-[#898989]">{item.title}</h1>
            <span className="font-bold text-2xl">{item.digit}</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className={`${ item.specialCondition ? "py-1 px-2 flex items-center text-sm text-[#34CAA5] bg-green-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100" : "py-1 px-2 flex items-center text-sm text-[#ED544E] bg-red-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
              {item.percent}
            </span>
            <p className=" text-sm">vs previous month</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TotalComponents;
