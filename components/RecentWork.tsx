import React from "react";
import Card from "./UI/Card";
import { RecentWorks } from "@/constants/data";

const RecentWork = () => {
  return (
    <section className="bg-[#F0F0F0] flex-col flexContainer overflow-hidden py-8 px-8">
      <div className="grid grid-cols-3 gap-4">
      {RecentWorks.map((work) => (
        <Card
          key={work.title}
          img={work.img}
          title={work.title}
          link={work.link}
        />
      ))}
      </div>
    </section>
  );
};

export default RecentWork;
