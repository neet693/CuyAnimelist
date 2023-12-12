import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section className="mt-4 w-full">
      <Header title={"My Collection"} />
      <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/" className="relative border-2 border-warna-accent">
          <Image src="" alt="" className="w-full" width={300} height={300} />
          <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-warna-accent">
            <h5 className="text-xl text-center ">Judul Anime Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-warna-accent">
          <Image src="" alt="" className="w-full" width={300} height={300} />
          <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-warna-accent">
            <h5 className="text-xl text-center ">Judul Anime Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-warna-accent">
          <Image src="" alt="" className="w-full" width={300} height={300} />
          <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-warna-accent">
            <h5 className="text-xl text-center ">Judul Anime Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-warna-accent">
          <Image src="" alt="" className="w-full" width={300} height={300} />
          <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-warna-accent">
            <h5 className="text-xl text-center ">Judul Anime Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Page;
