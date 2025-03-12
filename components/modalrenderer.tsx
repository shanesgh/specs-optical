"use client";

import { useModal } from "@/hooks/use-modal";
import ModalComp from "./modalcomp";

export const ModalRenderer: React.FC = () => {
  const { isOpen } = useModal();
  return isOpen ? <ModalComp /> : null;
};
