import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";
import { urlFor } from "@/sanity/lib/image";

type CartItemProps = {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  images?: string;
};

type CartProps = {
  item: CartItemProps;
};

const CartItem = ({ item }: CartProps) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex w-full justify-between items-center h-[100px] border-b">
      {/* image */}
      <div className="w-[90px] h-[90px] relative ">
        <Image
          src={item.images?.[0] ? urlFor(item.images[0]).url() : ""}
          fill
          priority
          sizes="(max-width: 110px) 110px, 110px"
          className="object-cover"
          alt=""
        />
      </div>
      {/* name, price, quantity, remove */}
      <div className="w-full max-w-[200px] flex flex-col justify-between  gap-4 h-[90px] p-2">
        <div className="flex items-center justify-between">
          <h5>{item.name}</h5>
          <button
            className="rounded-full shadow-2xl shadow-blue-950/90 hover:shadow-red-700/90 hover:scale-105 duration-75 ease-out text-[10px]"
            onClick={() => removeItem(item.id)}
          >
            <FaX className="text-sm" />
          </button>
        </div>
        {/* increment, decrement, item price */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button onClick={() => decrementItem(item.id)}>
              <FaMinus className="text-[10px]" />
            </button>
            <div className="font-semibold">{item.quantity}</div>
            <button onClick={() => incrementItem(item.id)}>
              <FaPlus className=" text-[10px]" />
            </button>
          </div>
          <div className="font-semibold text-balance text-right">
            ${item.price * item.quantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
