"use client";

import { CaretDoubleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <div className="mb-4 flex justify-between items-center">
      <button onClick={handleBack} className="text-warna-primary">
        <CaretDoubleLeft size={32} />
      </button>
      <h3 className="text-2xl text-warna-primary font-bold">{title}</h3>
    </div>
  );
};
export default Header;
