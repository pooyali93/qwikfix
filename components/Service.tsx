import Image from "next/image";
import ServiceItem from "./UI/ServiceItem";
import {
  services,
  serviceTag,
  serviceTitle,
  serviceDesc,
} from "@/constants/data";

const Service = () => {
  const servicesFirstList = services.slice(0, Math.ceil(services.length / 2));
  const servicesSecondList = services.slice(Math.ceil(services.length / 2));
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat">
      <div className="max-container relative w-full flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-2/5 py-12 px-20">
          <p className="bold-14 text-blue-70 uppercase">{serviceTag}</p>
          <h2 className="bold-40 lg:bold-64 py-4">{serviceTitle}</h2>
          <p className="regular-24">{serviceDesc}</p>
        </div>
        <div className="z-20 flex justify-center items-center gap-12 w-full lg:w-3/5 md:bg-gray-90">
          <ul className="py-10 list-image-checklist flex flex-col gap-5">
            {servicesFirstList.map((service) => (
              <ServiceItem
                key={service.title}
                icon={service.icon}
                title={service.title}
              />
            ))}
          </ul>
          <ul className="py-10 list-image-checklist flex flex-col gap-5 ">
            {servicesSecondList.map((service) => (
              <ServiceItem
                key={service.title}
                icon={service.icon}
                title={service.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
