import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { TetrioService } from '../../services/tetrio.service';

import { User, XPUser } from '../../models/users';

import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { XpLeaderboardComponent } from '../xp-leaderboard/xp-leaderboard.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    LeaderboardComponent,
    XpLeaderboardComponent,
    MatCardModule,
    MatTabsModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  public xpLeaderboardData!: XPUser[];
  public mainLeaderboardData!: User[];

  constructor(private tetrioService: TetrioService) {}

  ngOnInit(): void {
    this.tetrioService.users
      .getLeaderboard()
      .subscribe(
        (response) => (this.mainLeaderboardData = response.data.users)
      );
    this.tetrioService.users
      .getLeaderboardXP()
      .subscribe((response) => (this.xpLeaderboardData = response.data.users));
  }
}
