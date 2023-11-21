import Image from "next/image";

interface ServiceProps {
  title: string;
  icon?: string;
}

const ServiceItem = ({ title, icon }: ServiceProps) => {
  return (
    <>
      <li className="flex items-center">
        <div className="flex flex-row items-center  justify-center">
          {icon && (
            <div className="flex justify-center">
              <Image src={icon} alt={title} width={32} height={32} />
            </div>
          )}
          <h3 className="bold-24 lg:bold-24 px-4 capitalize">{title}</h3>
        </div>
      </li>
    </>
  );
};

export default ServiceItem;
