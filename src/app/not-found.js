"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={64} className="text-warna-accent" />
        <h3 className="text-warna-accent text-4xl font-bold">NOT FOUND</h3>
        <Link
          href="/"
          className=" text-warna-primary hover:er:text-warna-accent transition-all underline"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
