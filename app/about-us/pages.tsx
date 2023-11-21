import Image from "next/image";
import { FEATURES } from "@/constants/data";
import FeatureItem from "@/components/UI/FeatureItem";

const About = () => {
  return (
    <section className="bg-[#F0F0F0] flex-col flexContainer overflow-hidden py-8 px-8">
      <div className="flex justify-center items-center">
        <Image src="/disk.png" alt="camp" width={50} height={50} />
        <h2 className="bold-14 text-blue-70 text-center uppercase">What we do</h2>
      </div>

      <div className="max-container  relative w-full flex justify-end">
        <ul className="mt-10 grid gap-10 lg:grid-cols-4 lg:mg-20 lg:gap-20 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <FeatureItem
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
