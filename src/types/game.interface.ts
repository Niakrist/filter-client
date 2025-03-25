export interface IGame {
    id: string;
    title: string;
    image: string;
    relaseDate: Date;
    price: number;
    rating: number;
    ageRating: string;
    developer: string;
    publisher: string;
    genres: Genres[];
    platforms: Platform[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export enum Platform {
    PC = "PC",
    PlayStation = "PlayStation",
    Xbox = "Xbox",
    Nintendo = "Nintendo",
  }
  
  export enum Genres {
    Action = "Action",
    Adventure = "Adventure",
    RPG = "RPG",
    Horror = "Horror",
    Shooter = "Shooter",
    Simulation = "Simulation",
    Survival = "Survival",
    Fantasy = "Fantasy",
    Strategy = "Strategy",
  }
  
  export enum AgeRating {
    E = "E", // Everyony
    E10plus = "E10plus", // Everyony +
    T = "T", // Teen
    M = "M", // Mature 17+
    AO = "AO", // Adults Onlo 18+
  }
  
  export type TypePaginationGames = {
    length: number;
    games: IGame[];
  };
  