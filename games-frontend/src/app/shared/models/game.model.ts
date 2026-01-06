/**
 * Interface représentant un jeu vidéo
 * Correspond à la structure retournée par l'API PHP
 */
export interface Game {
  id: number;
  title: string;
  platform:  string;
  genre: string;
  releaseYear: number;
  rating: number;
  description:  string;
  notes: string;
}

/**
 * Interface pour la réponse API des jeux
 */
export interface GamesApiResponse {
  success: boolean;
  data: Game[];
  count: number;
}

/**
 * Interface pour un seul jeu dans la réponse API
 */
export interface GameApiResponse {
  success: boolean;
  data: Game;
}
