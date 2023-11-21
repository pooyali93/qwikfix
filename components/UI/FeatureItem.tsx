import Image from "next/image";

interface FeatureProps {
  title: string;
  icon?: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureProps) => {
  return (
    <>
      <li className="flex w-full flex-1 flex-col items-start hover:bg-white rounded-lg py-5">
        <div className="p-4 lg:p-7 flex flex-col items-center justify-center">
          {icon && (
            <div className="bg-blue-500">
              <Image src={icon} alt={title} width={100} height={100} />
            </div>
          )}
          <h3 className="bold-12 lg:bold-24 mt-5 capitalize">{title}</h3>
          <p className="regular-16 mt-5 text-gray-600 lg:mt-[20px] lg:bg-no">
            {description}
          </p>
        </div>
      </li>
    </>
  );
};

export default FeatureItem;
