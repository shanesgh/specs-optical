"use client";

import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";

type CheckoutBtnProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
};

const CheckoutBtn: React.FC<CheckoutBtnProps> = ({ onClick, disabled }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="flex 
        justify-center 
        px-4
        py-2
        shadow-[4px_4px_0px_0px_rgba(0,0,0)] 
        text-md 
        font-semibold 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        active:translate-y-2
        transition-all
        linear
        rounded-2xl
        duration-100
        text-white bg-blue-950 hover:scale-105 ease-in focus-visible:outline-black hover:outline-black"
      onClick={onClick}
      disabled={disabled}
    >
      Notify Specs {pending && <Loader className="animate-spin h-4 w-4" />}
    </button>
  );
};

export default CheckoutBtn;
