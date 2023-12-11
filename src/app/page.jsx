import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./services/api-services";

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header
          title={"Paling Populer"}
          linkTitle={"Lihat Semua"}
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};
export default Page;
