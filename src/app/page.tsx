"use client";

import Benefits from "@/components/home/Benefits";
import Featured from "@/components/home/Featured";
import Search from "@/components/home/Search";
import Suggestions from "@/components/home/Suggestions";

const Home = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Search />
      <Featured />
      <Benefits />
      <Suggestions />
    </div>
  );
};

export default Home;
