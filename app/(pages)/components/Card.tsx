import Image from "next/image";

type Props = {
  item: {
    image: string;
    title: string;
    description: string;
  };
};

export default function SliderCard({ item }: Props) {
  return (
    <div className="flex flex-col w-[250px] h-[400px]  md:w-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 ">
      <div className="relative h-[300px] w-full pointer-events-none">
        <Image
          src={item.image}
          alt={item.title}
          className="object-cover"
          fill
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col p-4 flex-grow">
        <h3 className="text-lg font-semibold mb-2 pointer-events-none">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2 pointer-events-none">
          {item.description}
        </p>
        <button
          onClick={() => alert("clicked")}
          className="rounded-fyll px-3 py-2 bg-gray-500 text-white cursor-pointer"
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
