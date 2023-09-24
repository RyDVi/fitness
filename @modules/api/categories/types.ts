import { Dictionary } from "../base";

export interface Category extends Dictionary {
  slug: string;
}

export interface CategoryWithDicts extends Category {
  genres: string[];
  countries: string[];
  years: number[];
}

export interface FilmCategory {
  category: Category["id"];
}
