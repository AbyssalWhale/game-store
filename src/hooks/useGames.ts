import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: true;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {};
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {};
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: {};
  platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery | null) => useData<Game>(
  "/games", 
  {
    params: 
    {
      genres: gameQuery?.genre?.id, 
      parent_platforms: gameQuery?.platform?.id,
      ordering: gameQuery?.sortOrder,
      search: gameQuery?.searchText
    }
  }, 
  [gameQuery]);

export default useGames;
