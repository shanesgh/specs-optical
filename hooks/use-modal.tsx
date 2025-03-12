"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps {
  isOpen: boolean;
  handleOpen: (section: string) => void;
  handleClose: () => void;
  targetSection: string | null;
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  handleOpen: () => {},
  handleClose: () => {},
  targetSection: null,
});

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetSection, setTargetSection] = useState<string | null>(null);

  const handleOpen = (section: string) => {
    setTargetSection(section);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTargetSection(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, handleOpen, handleClose, targetSection }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
