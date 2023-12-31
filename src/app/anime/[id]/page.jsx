import { getAnimeResponse } from "@/services/api-services";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import BtnCollection from "@/components/AnimeList/BtnCollection";
import { authUserSession } from "@/services/auth-services";
import prisma from "@/services/prisma";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  return (
    <>
      <div className=" pt-4 px-4">
        <h3 className="text-warna-primary text-2xl">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && (
          <BtnCollection
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.jpg.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div className="pt-4 px-4 flex gap-2 text-warna-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-warna-primary p-2">
          <h3>Peringkat</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-warna-primary p-2">
          <h3>Score</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-warna-primary p-2">
          <h3>Anggota</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-warna-primary p-2">
          <h3>Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-warna-primary">
        <Image
          src={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};
export default Page;
