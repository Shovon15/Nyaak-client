"use client";
import { addToCart, updateQuantity } from "@/app/store/slices/cartSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

type Props = {
  item: {
    id: string;
    image: string;
    title: string;
    description: string;
    price: number;
  };
};

export default function SliderCard({ item }: Props) {
  const dispatch = useDispatch();

  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((i) => i.id === item.id),
  );

  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    dispatch(
      addToCart({
        ...item,
        quantity: 1,
        name: "",
      }),
    );
  };

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: quantity + 1 }));
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: quantity - 1 }));
    }
  };

  return (
    <div className="flex flex-col w-[250px] h-[400px] md:w-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative h-[300px] w-full pointer-events-none">
        <Image
          src={item.image}
          alt={item.title}
          className="object-cover"
          fill
        />
      </div>

      <div className="flex flex-col p-4 flex-grow">
        <h3 className="text-lg font-semibold mb-2 pointer-events-none">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2 pointer-events-none">
          {item.description}
        </p>

        {quantity > 0 ? (
          <div className="flex items-center space-x-1 mt-2">
            <button
              onClick={handleDecrease}
              className="px-4 py-2 bg-gray-500 rounded text-white rounded-l-full"
            >
              −
            </button>
            <div className="bg-gray-500 text-white text-center flex-grow py-2">
              {quantity} {quantity > 1 ? "items" : "item"} added
            </div>
            <button
              onClick={handleIncrease}
              className="px-4 py-2 bg-gray-500 rounded text-white rounded-r-full"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="rounded-full px-3 py-2 mt-2 bg-gray-500 text-white"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
