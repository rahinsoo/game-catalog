import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api. service';
import {
  RatingsStatsApiResponse,
  RatingStatParsed
} from '../../../shared/models';

/**
 * Service dédié aux statistiques
 * Consomme l'API PHP pour récupérer les stats
 */
@Injectable({
  providedIn: 'root'
})
export class StatsService extends ApiService {

  /**
   * Récupère les statistiques de notes
   * GET /api/stats/ratings
   * Convertit les strings en numbers pour faciliter l'utilisation
   */
  getRatingsStats(): Observable<RatingStatParsed[]> {
    return this.get<RatingsStatsApiResponse>('/stats/ratings')
      .pipe(
        map(response => response.data. map(stat => ({
          rating: parseInt(stat.rating, 10),
          count: parseInt(stat.count, 10)
        })))
      );
  }

  /**
   * Version brute sans conversion
   */
  getRatingsStatsRaw(): Observable<RatingsStatsApiResponse> {
    return this.get<RatingsStatsApiResponse>('/stats/ratings');
  }
}
