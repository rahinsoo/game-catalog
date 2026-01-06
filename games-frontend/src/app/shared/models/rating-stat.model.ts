/**
 * Interface représentant les statistiques d'une note
 * Correspond à la structure retournée par /api/stats/ratings
 */
export interface RatingStat {
  rating: string;  // Retourné comme string par MySQL
  count: string;   // COUNT(*) retourne aussi un string
}

/**
 * Interface pour la réponse API des statistiques
 */
export interface RatingsStatsApiResponse {
  success:  boolean;
  data: RatingStat[];
  total: number;
}

/**
 * Interface avec les types convertis pour l'utilisation dans l'app
 */
export interface RatingStatParsed {
  rating: number;
  count: number;
}
