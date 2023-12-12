import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNetstedRecomendedAnimeResponse,
  reproduce,
} from "../services/api-services";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNetstedRecomendedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 4);

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

      {/* Anime Rekomendasi */}
      <section>
        <Header title={"Rekomendasi Anime"} />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};
export default Page;
