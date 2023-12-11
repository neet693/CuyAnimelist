import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-warna-accent">
      <div className="flex md:flex-row flex-col md:items-center justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-2xl">
          CUYANIMELIST
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};
export default Navbar;
