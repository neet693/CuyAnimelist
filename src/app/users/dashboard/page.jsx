import { authUserSession } from "@/services/auth-services";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className=" mt-4 text-warna-primary flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold">Welcome {user.name}</h5>
      <Image src={user.image} height={250} width={250} />
      <div className="py-8 flex flex-wrap gap-4">
        <Link
          href="/users/dashboard/collection"
          className="bg-warna-accent text-warna-dark font-bold px-4 py-3 text-xl"
        >
          My Collections
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-warna-accent text-warna-dark font-bold px-4 py-3 text-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
