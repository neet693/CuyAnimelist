import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/services/auth-services";
import prisma from "@/services/prisma";
import Image from "next/image";
import Link from "next/link";

//Implementasi Prisma di Server-Side
const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });
  console.log(collection);
  return (
    <section className="mt-4 w-full">
      <Header title={"My Collection"} />
      <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative border-2 border-warna-accent"
            >
              <Image
                src={collect.anime_image}
                alt={collect.anime_image}
                className="w-full"
                width={300}
                height={300}
              />
              <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-warna-accent">
                <h5 className="text-xl text-center ">{collect.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Page;
