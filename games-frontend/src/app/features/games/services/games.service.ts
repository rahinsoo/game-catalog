import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

/**
 * Service de base pour les appels API
 * Centralise la configuration et la gestion des erreurs
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected apiUrl = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  /**
   * Effectue une requête GET
   */
  protected get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${endpoint}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Effectue une requête POST
   */
  protected post<T>(endpoint: string, data:  any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, data)
      .pipe(catchError(this.handleError));
  }

  /**
   * Gestion centralisée des erreurs HTTP
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Une erreur est survenue';

    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur: ${error.error. message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Code:  ${error.status}, Message: ${error.message}`;
    }

    console.error('Erreur API:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
