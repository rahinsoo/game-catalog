import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GamesService } from './features/games/services/games.service';
import { StatsService } from './features/stats/services/stats.service';

@Component({
  selector:  'app-root',
  standalone: true,
  imports:  [CommonModule, RouterOutlet],
  template: `
    <h1>Test API PHP</h1>

    <h2>Jeux les mieux notés :</h2>
    <pre>{{ topGames | json }}</pre>

    <h2>Jeux récents :</h2>
    <pre>{{ recentGames | json }}</pre>

    <h2>Stats ratings :</h2>
    <pre>{{ ratingsStats | json }}</pre>

    <router-outlet />
  `
})
export class AppComponent implements OnInit {
  topGames:  any;
  recentGames: any;
  ratingsStats: any;

  constructor(
    private gamesService: GamesService,
    private statsService: StatsService
  ) {}

  ngOnInit() {
    // Test API calls
    this.gamesService.getTopRatedGames().subscribe(
      data => this.topGames = data
    );

    this.gamesService.getRecentGames().subscribe(
      data => this. recentGames = data
    );

    this.statsService. getRatingsStats().subscribe(
      data => this.ratingsStats = data
    );
  }
}
